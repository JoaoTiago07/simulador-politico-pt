import React from 'react'
import '../styles/Dashboard.css'
import EstatisticasJogador from './EstatisticasJogador'
import EstatisticasEconomia from './EstatisticasEconomia'
import ControladorTurnos from './ControladorTurnos'
import DashboardNoticias from './DashboardNoticias'

function Dashboard({ onVoltar }) {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>🏛️ Simulador Político Português</h1>
        <button className="btn-menu" onClick={onVoltar}>
          ← Menu Principal
        </button>
      </header>

      <div className="dashboard-container">
        <aside className="sidebar-esquerda">
          <ControladorTurnos />
          <DashboardNoticias />
        </aside>

        <main className="conteudo-principal">
          <EstatisticasJogador />
          <EstatisticasEconomia />
        </main>
      </div>
    </div>
  )
}

export default Dashboard
