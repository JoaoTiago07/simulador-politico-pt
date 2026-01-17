import React from 'react'
import '../styles/EstatisticasJogador.css'
import { useGame } from '../hooks/useGame'

function EstatisticasJogador() {
  const { personagem, turno_atual, ano_atual, mes_atual } = useGame()

  const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
  const mes_nome = meses[mes_atual - 1]

  const getColorReputacao = (valor) => {
    if (valor >= 75) return '#22c55e'
    if (valor >= 50) return '#eab308'
    if (valor >= 25) return '#f97316'
    return '#ef4444'
  }

  const getColorInfluencia = (valor) => {
    if (valor >= 70) return '#06b6d4'
    if (valor >= 40) return '#3b82f6'
    return '#8b5cf6'
  }

  return (
    <div className="estatisticas-jogador">
      <div className="header-stats">
        <h2>👤 {personagem.nome}</h2>
        <span className="cargo">{personagem.cargo_atual}</span>
        <span className="turno">Turno {turno_atual} ({mes_nome}/{ano_atual})</span>
      </div>

      <div className="metricas-grid">
        {/* Reputação */}
        <div className="metrica-card">
          <div className="metrica-header">
            <h3>🌟 Reputação</h3>
            <span className="valor">{personagem.metricas.reputacao.toFixed(0)}/100</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${personagem.metricas.reputacao}%`,
                backgroundColor: getColorReputacao(personagem.metricas.reputacao)
              }}
            ></div>
          </div>
          <p className="status-text">
            {personagem.metricas.reputacao >= 75 ? '⭐ Excelente' :
             personagem.metricas.reputacao >= 50 ? '👍 Boa' :
             personagem.metricas.reputacao >= 25 ? '😐 Aceitável' :
             '👎 Fraca'}
          </p>
        </div>

        {/* Influência */}
        <div className="metrica-card">
          <div className="metrica-header">
            <h3>💪 Influência</h3>
            <span className="valor">{personagem.metricas.influencia.toFixed(0)}/100</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${personagem.metricas.influencia}%`,
                backgroundColor: getColorInfluencia(personagem.metricas.influencia)
              }}
            ></div>
          </div>
          <p className="status-text">
            {personagem.metricas.influencia >= 70 ? '🔥 Muito Influente' :
             personagem.metricas.influencia >= 40 ? '📢 Influente' :
             '🤐 Pouca influência'}
          </p>
        </div>

        {/* Apoio da Base */}
        <div className="metrica-card">
          <div className="metrica-header">
            <h3>🤝 Apoio da Base</h3>
            <span className="valor">{personagem.metricas.apoio_base.toFixed(0)}/100</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${personagem.metricas.apoio_base}%`,
                backgroundColor: '#f59e0b'
              }}
            ></div>
          </div>
          <p className="status-text">
            {personagem.metricas.apoio_base >= 70 ? '🎯 Apoio sólido' :
             personagem.metricas.apoio_base >= 40 ? '📊 Apoio moderado' :
             '⚠️ Apoio fraco'}
          </p>
        </div>

        {/* Escândalos */}
        <div className="metrica-card">
          <div className="metrica-header">
            <h3>⚠️ Escândalos</h3>
            <span className="valor">{personagem.metricas.escandalos.toFixed(0)}/100</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${personagem.metricas.escandalos}%`,
                backgroundColor: personagem.metricas.escandalos > 50 ? '#ef4444' : '#f97316'
              }}
            ></div>
          </div>
          <p className="status-text">
            {personagem.metricas.escandalos > 70 ? '🚨 Muito comprometido' :
             personagem.metricas.escandalos > 40 ? '⚠️ Alguns problemas' :
             '✅ Limpo'}
          </p>
        </div>
      </div>

      <div className="experiencia-box">
        <h4>📈 Experiência Acumulada</h4>
        <p className="exp-valor">{personagem.metricas.experiencia} pontos</p>
        <div className="exp-bar">
          <div
            className="exp-fill"
            style={{ width: `${(personagem.metricas.experiencia % 1000) / 10}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default EstatisticasJogador
