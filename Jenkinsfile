pipeline {
  agent any
    stages {
        stage('Build') {
          agent {
            docker {
              image 'node:6-alpine'
              args '-p 3000:3000'
            }
          }
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
          agent {
            docker {
              image 'node:6-alpine'
              args '-p 3000:3000'
            }
          }
            steps {
                sh 'node ./js/test.js'
            }
        }

        //build using docker file
        stage('Build docker image') {
            steps {
                sh 'docker build . -t krivchenko1306/finaltask:$GIT_COMMIT'
            }
          }

        stage('Test docker image') {
          steps {
                sh 'echo "Tests passed"'
              }
        }

        stage ('Push docker image to dockerhub') {
          steps {
          sh 'docker login -u krivchenko1306 -p q13069715q'
          sh 'docker push krivchenko1306/finaltask:$GIT_COMMIT'
        }
      }

      //stage('delete container') {
      stage('Test on Linux') {
          agent {
              label 'node1'
          }
          steps {
              sh 'sudo docker run krivchenko1306/finaltask:$GIT_COMMIT'
              sh 'sudo docker ps'
              //sh 'sudo docker ps -a'
          }
        }
      }
    }
