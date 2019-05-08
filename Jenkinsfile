pipeline {
	agent any

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
            npm install
          '''
			}
		}
	}
}

