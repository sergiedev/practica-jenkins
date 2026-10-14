pipeline {
    agent any

    stages {
        stage('1. Preparar Entorno') {
            steps {
                echo 'Instalando dependencias con npm...'
                sh 'npm ci'
            }
        }

        stage('2. Compilación TypeScript') {
            steps {
                echo 'Compilando TypeScript a JavaScript...'
                sh 'npm run build'
            }
        }

        stage('3. Pruebas Unitarias (Vitest)') {
            steps {
                echo 'Ejecutando pruebas con Vitest...'
                sh 'npm test'
            }
            post {
                always {
                    // Publica el reporte de pruebas generado por Vitest en XML
                    junit 'junit.xml'
                }
            }
        }

        stage('4. Simulación de Despliegue') {
            steps {
                echo 'Pruebas aprobadas. Iniciando aplicación...'
                sh 'node dist/index.js &'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completado con éxito.'
        }
        failure {
            echo '❌ El pipeline falló en alguna etapa.'
        }
    }
}