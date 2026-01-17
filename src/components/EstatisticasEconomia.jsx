import React from 'react'
import '../styles/EstatisticasEconomia.css'
import { useGame } from '../hooks/useGame'

function EstatisticasEconomia() {
  const { economia, governo } = useGame()

  return (
    <div className="estatisticas-economia">
      <h2>📊 Estado da Economia</h2>

      <div className="economia-grid">
        {/* PIB */}
        <div className="economia-card">
          <h3>📈 PIB (Crescimento)</h3>
          <div className="valor">
            <span className="numero">{economia.pib_crescimento.toFixed(2)}</span>
            <span className="unidade">%/ano</span>
          </div>
          <p className={`status ${economia.pib_crescimento > 1 ? 'positivo' : 'negativo'}`}>
            {economia.pib_crescimento > 1 ? '⬆️ Crescimento' : '⬇️ Recessão'}
          </p>
        </div>

        {/* Desemprego */}
        <div className="economia-card">
          <h3>💼 Taxa de Desemprego</h3>
          <div className="valor">
            <span className="numero">{economia.desemprego.toFixed(1)}</span>
            <span className="unidade">%</span>
          </div>
          <p className={`status ${economia.desemprego < 6 ? 'positivo' : 'negativo'}`}>
            {economia.desemprego < 6 ? '⬇️ Reduzindo' : '⬆️ Aumentando'}
          </p>
        </div>

        {/* Inflação */}
        <div className="economia-card">
          <h3>💸 Taxa de Inflação</h3>
          <div className="valor">
            <span className="numero">{economia.inflacao.toFixed(1)}</span>
            <span className="unidade">%/ano</span>
          </div>
          <p className={`status ${economia.inflacao < 3 ? 'positivo' : 'negativo'}`}>
            {economia.inflacao < 3 ? '✅ Controlada' : '⚠️ Elevada'}
          </p>
        </div>

        {/* Confiança */}
        <div className="economia-card">
          <h3>🤝 Confiança Empresarial</h3>
          <div className="valor">
            <span className="numero">{economia.confianca.toFixed(0)}</span>
            <span className="unidade">/100</span>
          </div>
          <div className="mini-bar">
            <div className="mini-fill" style={{ width: `${economia.confianca}%` }}></div>
          </div>
        </div>
      </div>

      {/* Governo */}
      <div className="governo-section">
        <h2>🏛️ Estado do Governo</h2>
        <div className="governo-grid">
          <div className="governo-card">
            <h3>Aprovação do Governo</h3>
            <div className="valor">
              <span className="numero">{governo.aprovacao.toFixed(0)}</span>
              <span className="unidade">%</span>
            </div>
            <div className="mini-bar">
              <div
                className="mini-fill"
                style={{
                  width: `${governo.aprovacao}%`,
                  backgroundColor: governo.aprovacao > 50 ? '#22c55e' : '#ef4444'
                }}
              ></div>
            </div>
          </div>

          <div className="governo-card">
            <h3>Estabilidade Política</h3>
            <div className="valor">
              <span className="numero">{governo.estabilidade.toFixed(0)}</span>
              <span className="unidade">%</span>
            </div>
            <div className="mini-bar">
              <div
                className="mini-fill"
                style={{
                  width: `${governo.estabilidade}%`,
                  backgroundColor: governo.estabilidade > 60 ? '#22c55e' : '#f97316'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EstatisticasEconomia
