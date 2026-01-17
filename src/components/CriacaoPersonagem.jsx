import React, { useState } from 'react'
import '../styles/CriacaoPersonagem.css'
import partidos from '../data/partidos.json'

function CriacaoPersonagem({ modo, onPersonagemCriado }) {
  const [nome, setNome] = useState('')
  const [partido_id, setPartidoId] = useState(1)
  const [ideologia_pessoal, setIdeologiaPessoal] = useState(0)

  const handleCriar = () => {
    if (!nome.trim()) {
      alert('Por favor, insira um nome!')
      return
    }

    const personagem = {
      nome,
      partido_id: parseInt(partido_id),
      ideologia_pessoal,
      modo,
      data_criacao: new Date().toISOString(),
      metricas: {
        reputacao: 50,
        influencia: 10,
        apoio_base: 30,
        escandalos: 0,
        experiencia: 0
      },
      cargo_atual: 'Cidadão'
    }

    onPersonagemCriado(personagem)
  }

  return (
    <div className="criacao-personagem">
      <div className="form-container">
        <h1>⚙️ Criar Seu Personagem Político</h1>

        <div className="form-group">
          <label htmlFor="nome">Nome Político:</label>
          <input
            id="nome"
            type="text"
            placeholder="Ex: José da Silva"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="partido">Partido Político:</label>
          <select
            id="partido"
            value={partido_id}
            onChange={(e) => setPartidoId(e.target.value)}
          >
            {partidos.partidos.map(p => (
              <option key={p.id} value={p.id}>
                {p.sigla} - {p.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Sua Ideologia Pessoal (Esquerda-Direita):</label>
          <input
            type="range"
            min="-1"
            max="1"
            step="0.1"
            value={ideologia_pessoal}
            onChange={(e) => setIdeologiaPessoal(parseFloat(e.target.value))}
          />
          <span className="ideologia-label">
            {ideologia_pessoal < -0.5 ? 'Esquerda Radical' :
             ideologia_pessoal < -0.2 ? 'Esquerda' :
             ideologia_pessoal < 0.2 ? 'Centro' :
             ideologia_pessoal < 0.5 ? 'Direita' :
             'Direita Radical'}
          </span>
        </div>

        <div className="info-box">
          <h3>📝 Informações do Seu Personagem:</h3>
          <ul>
            <li>Nome: <strong>{nome || 'Não definido'}</strong></li>
            <li>Partido: <strong>{partidos.partidos.find(p => p.id === parseInt(partido_id))?.sigla}</strong></li>
            <li>Modo: <strong>{modo}</strong></li>
            <li>Reputação Inicial: <strong>50/100</strong></li>
            <li>Cargo: <strong>Cidadão (Nível 1)</strong></li>
          </ul>
        </div>

        <div className="button-group">
          <button className="btn btn-primary" onClick={handleCriar}>
            ✓ Criar Personagem
          </button>
          <button className="btn btn-secondary" onClick={() => window.location.reload()}>
            ← Voltar
          </button>
        </div>
      </div>
    </div>
  )
}

export default CriacaoPersonagem
