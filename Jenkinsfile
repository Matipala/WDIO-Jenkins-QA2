pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:/opt/homebrew/sbin:${env.PATH}"
    }

    stages {
        stage('Verificar herramientas') {
            steps {
                sh 'node --version && npm --version'
            }
        }

        stage('Instalar dependencias') {
            steps {
                sh '''
                  if [ -f package-lock.json ]; then
                    npm ci
                  else
                    npm install
                  fi
                '''
            }
        }

        stage('Ejecutar WDIO') {
            steps {
                sh 'npm test'
            }
        }
    }

    post {
        always {
            script {
                if (fileExists('allure-results')) {
                    allure results: [[path: 'allure-results']]
                } else {
                    echo 'No se encontró allure-results: revisar la ejecución de WDIO.'
                }
            }
            archiveArtifacts artifacts: 'allure-results/**', allowEmptyArchive: true
        }
    }
}
