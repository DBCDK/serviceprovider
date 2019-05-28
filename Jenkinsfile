#!groovy​

properties([
        buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '10')),
        pipelineTriggers([])
])

def PRODUCT = "serviceprovider"
def CONTAINER_NAME = "${PRODUCT}"
def BUILD_NAME = "$PRODUCT :: $BRANCH_NAME"
def DOCKER_REPO = "docker-ux.dbc.dk"
def DOCKER_NAME = "${DOCKER_REPO}/${CONTAINER_NAME}:${BUILD_NUMBER}"
def DOCKER_STATUS = ''
pipeline {
    agent {
        label 'devel9-head'
    }
    triggers {
        pollSCM("H/3 * * * *")
    }
    stages {
        stage('Test and build image') {
            steps {
                script {
                    sh "docker build -t $DOCKER_NAME --pull --no-cache ."
                }
            }
        }
        stage('Push to Artifactory') {
            /* when {
                branch "master"
            } */
            steps {
                script {
                    if (currentBuild.resultIsBetterOrEqualTo('SUCCESS')) {
                        def ARTY_SERVER = Artifactory.server 'arty'
                        def ARTY_DOCKER = Artifactory.docker server: ARTY_SERVER, host: env.DOCKER_HOST
                        def BUILD_INFO = Artifactory.newBuildInfo()
                        BUILD_INFO.name = BUILD_NAME
                        BUILD_INFO.env.capture = true
                        BUILD_INFO.env.collect()
                        BUILD_INFO = ARTY_DOCKER.push("$DOCKER_NAME", 'docker-ux', BUILD_INFO)
                        ARTY_SERVER.publishBuildInfo BUILD_INFO
                    }
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