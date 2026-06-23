#!groovy​

@Library('dependency-track')

properties([
  buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '10')),
  pipelineTriggers([])
])

def app
def DT_TEAM_NAME = "febib"
def DT_PROJECT_TYPE = "javascript"
def OUTPUT_FOLDER = "./dependency-track-folder"
def SBOM_TYPE = "application"
def DT_PROJECTS = [
  [folder: "."],
  [folder: "./client"]
].collect { project ->
  [
    folder: project.folder,
    sbomType: project.sbomType ?: SBOM_TYPE,
    teamName: project.teamName ?: DT_TEAM_NAME,
    projectType: project.projectType ?: DT_PROJECT_TYPE,
    outputFolder: project.outputFolder ?: OUTPUT_FOLDER
  ]
}

pipeline {
  agent {
    label 'devel10-head'
  }
  environment {
    PRODUCT = "serviceprovider"
    CONTAINER_NAME = "${PRODUCT}-${BRANCH_NAME.toLowerCase()}"
    DOCKER_REPO = "docker-frontend.artifacts.dbccloud.dk"
    DOCKER_NAME = "${DOCKER_REPO}/${CONTAINER_NAME}:${BUILD_NUMBER}"
    GITLAB_ID= "407"
    GITLAB_PRIVATE_TOKEN = credentials("metascrum-gitlab-api-token")
  }
  triggers {
    pollSCM("H/3 * * * *")
  }
  stages {
    stage("Supply-chain gate") {
      agent {
        docker {
          label 'devel10-head'
          image "docker-dbc.artifacts.dbccloud.dk/dbc-node:node25"
          alwaysPull true
        }
      }
      steps {
        script {
          for (def project : DT_PROJECTS) {
            dir(project.folder) {
              generateSbomNpm(
                sbomType: project.sbomType,
                outputFolder: project.outputFolder
              )
              dependencyTrackGate(
                projectBom: "${project.outputFolder}/sbom.json",
                projectTeam: project.teamName,
                projectType: project.projectType,
                *:(fileExists("${project.outputFolder}/vex.json") ? [projectVex: "${project.outputFolder}/vex.json"] : [:])
              )
            }
          }
        }
      }
    }
    stage('Test and build image') {
      steps {
        script {
          sh """docker build -t $DOCKER_NAME --pull --no-cache ."""
          app = docker.image("${DOCKER_NAME}")
        }
      }
    }
    stage('Push to Artifactory') {
      when {
        branch "master"
      }
      steps {
        script {
          if (currentBuild.resultIsBetterOrEqualTo('SUCCESS')) {
            docker.withRegistry("https://${DOCKER_REPO}", 'docker') {
              app.push()
              app.push("latest")
            }
          }
        }
      }
    }
    stage("Update staging version number") {
      agent {
        docker {
          label 'devel10-head'
          image "docker-dbc.artifacts.dbccloud.dk/build-env:latest"
          alwaysPull true
        }
      }
      when {
        branch "master"
      }
      steps {
        dir("deploy") {
          sh """#!/usr/bin/env bash
						set-new-version configuration.yaml ${env.GITLAB_PRIVATE_TOKEN} ${env.GITLAB_ID} ${BUILD_NUMBER} -b staging
					"""
        }
      }
    }
  }
  post {
    always {
      script {
        sh """
                    docker rmi $DOCKER_NAME
                """
      }
    }
  }
}
