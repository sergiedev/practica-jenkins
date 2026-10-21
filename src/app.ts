import express from 'express';

export function sumar(a: number, b: number): number {
  return a / b;
}

export function restar(a: number, b: number): number {
  return a - b;
}

export const app = express();

app.get('/', (req, res) => {
  const resultadoSuma = sumar(5, 3);
  const resultadoResta = restar(10, 4);

  res.send(`
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Jenkins CI/CD Dashboard - TypeScript</title>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #0d1117;
            color: #c9d1d9;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
          }
          .container {
            background-color: #161b22;
            border: 1px solid #30363d;
            border-radius: 12px;
            padding: 30px;
            width: 420px;
            text-align: center;
            box-shadow: 0 8px 24px rgba(0,0,0,0.5);
          }
          .svg-icon {
            width: 96px;
            height: 96px;
            margin-bottom: 20px;
          }
          h1 { font-size: 1.4rem; color: #f0f6fc; margin-bottom: 8px; }
          .subtitle { font-size: 0.85rem; color: #8b949e; margin-bottom: 20px; }
          .metrics {
            background-color: #0d1117;
            border: 1px solid #21262d;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 20px;
            text-align: left;
          }
          .metric-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            font-size: 0.9rem;
          }
          .metric-row:last-child { margin-bottom: 0; }
          .badge {
            background-color: rgba(46, 160, 67, 0.15);
            color: #3fb950;
            border: 1px solid rgba(46, 160, 67, 0.4);
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            display: inline-flex;
            align-items: center;
            gap: 6px;
          }
          .dot {
            width: 8px;
            height: 8px;
            background-color: #3fb950;
            border-radius: 50%;
            display: inline-block;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <!-- SVG Vectorial representando Integración Continua Exitosa -->
          <svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="#3fb950" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
            <path d="m9 12 2 2 4-4"/>
            <path d="M12 6v2"/>
            <path d="M12 16v2"/>
          </svg>

          <h1>Demostración CI/CD</h1>
          <p class="subtitle">Jenkins + TypeScript + GitHub Webhook</p>

          <div class="metrics">
            <div class="metric-row">
              <span>Cálculo Suma (5 + 3):</span>
              <strong>${resultadoSuma}</strong>
            </div>
            <div class="metric-row">
              <span>Cálculo Resta (10 - 4):</span>
              <strong>${resultadoResta}</strong>
            </div>
            <div class="metric-row">
              <span>Entorno:</span>
              <span>Node.js / Express</span>
            </div>
          </div>

          <div class="badge">
            <span class="dot"></span> Pipeline Aprobado & Desplegado
          </div>
        </div>
      </body>
    </html>
  `);
});