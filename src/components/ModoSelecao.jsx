import React, { useState } from 'react'
import '../styles/ModoSelecao.css'
import { GAME_MODES, CARREIRAS_POSSIVEIS } from '../data/constants'

function ModoSelecao({ onModoSelecionado }) {
  const [modo_selecionado, setModoSelecionado] = useState(null)

  const modos = [
    {
      id: GAME_MODES.DEPUTADO,
      titulo: '👤 Deputado',
      descricao: 'Comece como cidadão comum e ascenda a político',
      detalhes: 'Começar do zero, construir reputação, ascender a ministro'
    },
    {
      id: GAME_MODES.AUTARCA,
      titulo: '🏛️ Autarca',
      descricao: 'Governe um município português',
      detalhes: 'Gerir orçamento local, infraestruturas, população'
    },
    {
      id: GAME_MODES.PRESIDENTE,
      titulo: '🇵🇹 Presidente',
      descricao: 'Seja Presidente da República',
      detalhes: 'Poder executivo, nomeações, dissolução de governo'
    },
    {
      id: GAME_MODES.PRIMEIRO_MINISTRO,
      titulo: '📋 Primeiro-Ministro',
      descricao: 'Lidere o Governo Português',
      detalhes: 'Propor leis, gerir coligações, manter estabilidade'
    },
    {
      id: GAME_MODES.SANDBOX,
      titulo: '🎮 Sandbox',
      descricao: 'Visão Deus - Controle toda a política',
      detalhes: 'Sem limitações, simule cenários complexos'
    }
  ]

  return (
    <div className="modo-selecao">
      <h1>🏛️ Escolha o Seu Caminho Político</h1>
      <p className="subtitulo">Qual será seu papel em Portugal?</p>

      <div className="modos-grid">
        {modos.map(modo => (
          <div
            key={modo.id}
            className={`modo-card ${modo_selecionado === modo.id ? 'selecionado' : ''}`}
            onClick={() => setModoSelecionado(modo.id)}
          >
            <h2>{modo.titulo}</h2>
            <p className="descricao">{modo.descricao}</p>
            <p className="detalhes">{modo.detalhes}</p>
            <button
              className="btn-selecionar"
              onClick={() => onModoSelecionado(modo.id)}
            >
              Escolher →
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ModoSelecao
