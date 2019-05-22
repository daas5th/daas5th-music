pipeline {
  
  agent {
      docker {
          image 'maven:3-alpine'
      }
  }

	stages {
		stage('checkout') {
			steps {
			  echo "checkout!"
        deleteDir()
        retry(3) { checkout scm }
			}
		}
		stage ('install modules') {
			steps {
        echo "install modules!"
          sh '''
             mvn --version
          '''
			}
		}
	}
}

