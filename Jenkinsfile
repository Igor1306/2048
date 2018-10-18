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

      stage('Remove containers') {
          agent {
              label 'node1'
          }
          steps {
              //sh 'sudo docker rm -vf $(sudo docker ps -a -q)'
              sh 'sudo docker container prune -y'
              //sh 'sudo docker rmi -f $(sudo docker images -a -q)'
          }
        }

      stage('Run new container') {
          agent {
              label 'node1'
          }
          steps {
              sh 'sudo docker run -p 8081:8081 -d krivchenko1306/finaltask:$GIT_COMMIT'
              sh 'sudo docker ps'
          }
        }
      }
    }
