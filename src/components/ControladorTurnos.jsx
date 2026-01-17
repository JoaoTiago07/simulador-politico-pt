import React from 'react'
import '../styles/ControladorTurnos.css'
import { useGame } from '../hooks/useGame'

function ControladorTurnos() {
  const { turno_atual, ano_atual, mes_atual, avancarTurno } = useGame()

  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  const mes_nome = meses[mes_atual - 1]

  // Calcular próximo turno
  const proximo_mes = mes_atual === 12 ? 1 : mes_atual + 1
  const proximo_ano = mes_atual === 12 ? ano_atual + 1 : ano_atual
  const mes_proximo_nome = meses[proximo_mes - 1]

  // Eleições
  const turno_eleicoes_legislativas = 48 - (turno_atual % 48) // A cada 4 anos
  const turno_eleicoes_autarquicas = 48 - (turno_atual % 48)
  const turno_eleicoes_presidenciais = 60 - (turno_atual % 60) // A cada 5 anos

  return (
    <div className="controlador-turnos">
      <div className="turno-info">
        <div className="tempo-atual">
          <h3>⏰ Tempo Atual</h3>
          <p className="data-grande">{mes_nome} de {ano_atual}</p>
          <p className="turno-numero">Turno {turno_atual}</p>
        </div>

        <div className="tempo-proximo">
          <h3>📅 Próximo Turno</h3>
          <p className="data-proxima">{mes_proximo_nome} de {proximo_ano}</p>
          <button className="btn-avancar" onClick={avancarTurno}>
            ➡️ Avançar Mês
          </button>
        </div>
      </div>

      <div className="eleicoes-proximamente">
        <h3>🗳️ Eleições Próximas</h3>
        <div className="eleicoes-grid">
          <div className="eleicao-item">
            <span className="tipo">Legislativas</span>
            <span className={`turnos ${turno_eleicoes_legislativas < 6 ? 'proximamente' : ''}`}>
              Em {turno_eleicoes_legislativas} meses
            </span>
          </div>
          <div className="eleicao-item">
            <span className="tipo">Autárquicas</span>
            <span className={`turnos ${turno_eleicoes_autarquicas < 6 ? 'proximamente' : ''}`}>
              Em {turno_eleicoes_autarquicas} meses
            </span>
          </div>
          <div className="eleicao-item">
            <span className="tipo">Presidenciais</span>
            <span className={`turnos ${turno_eleicoes_presidenciais < 6 ? 'proximamente' : ''}`}>
              Em {turno_eleicoes_presidenciais} meses
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ControladorTurnos
