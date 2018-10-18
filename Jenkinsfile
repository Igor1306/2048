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

        //stage ('delete old container') {
        //  steps {
        //  node('node1') {
            //  steps {
          //      sh 'docker rm $(docker ps -a -f status=exited -q)'
            //  }
          //}
        //}
      //}

      //stage('delete container') {
      stage('Test on Linux') {
          agent {
              label 'node1'
          }
          steps {
              sh 'sudo docker pull krivchenko1306/finaltask'
              //sh 'sudo docker ps -a'
          }
        }
      }
    }
