pipeline {
    agent any

    environment {
        IMAGE_NAME = "narattscoward/finead-todo-app"
    }

    stages {

        stage('Build') {
            steps {
                echo "Build stage - dependencies handled in Dockerfile"
            }
        }

        stage('Containerise') {
            steps {
                sh 'docker build -t $IMAGE_NAME:latest .'
            }
        }

        stage('Push') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {

                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh 'docker push $IMAGE_NAME:latest'

                }
            }
        }

    }
}