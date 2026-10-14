pipeline {
    agent any

    tools {
        // Indica a Jenkins que use la herramienta configurada en Global Tools
        nodejs 'node20'
    }

    stages {
        stage('1. Preparar Entorno') {
            steps {
                echo 'Instalando dependencias...'
                sh 'npm ci'
            }
        }

        stage('2. Compilación TypeScript') {
            steps {
                echo 'Compilando TypeScript...'
                sh 'npm run build'
            }
        }

        stage('3. Pruebas Unitarias (Vitest)') {
            steps {
                echo 'Ejecutando pruebas...'
                sh 'npm test'
            }
            post {
                always {
                    junit 'junit.xml'
                }
            }
        }

        stage('4. Simulación de Despliegue') {
            steps {
                echo 'Iniciando servidor Express...'
                sh 'node dist/index.js &'
            }
        }
    }
}