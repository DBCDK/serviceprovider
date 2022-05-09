#!groovy​

properties([
  buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '10')),
  pipelineTriggers([])
])

def app

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
