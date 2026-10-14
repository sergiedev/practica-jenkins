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

        stage('4. Despliegue Local & Health Check (CD)') {
            steps {
                echo '🧹 Liberando el puerto 3000 si hay un proceso previo en ejecución...'
        // Mata cualquier proceso que esté escuchando en el puerto 3000 (ignora error con || true si no hay ninguno)
                sh 'fuser -k 3000/tcp || killall node || true'
        
                echo '🚀 Iniciando nueva versión de la app Express...'
                sh 'JENKINS_NODE_COOKIE=dontKillMe nohup node dist/index.js > app.log 2>&1 &'
        
                echo '⏳ Esperando a que el servidor responda...'
                sh 'sleep 3'
        
                echo '🔍 Verificando estado del servidor...'
                sh 'curl -f http://localhost:3000 || exit 1'
            }
        }
    }
}