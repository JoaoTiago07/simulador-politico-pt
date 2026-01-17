import { useState } from 'react'
import './App.css'
import ModoSelecao from './components/ModoSelecao'
import CriacaoPersonagem from './components/CriacaoPersonagem'

function App() {
  const [tela_atual, setTelaAtual] = useState('menu') // menu, criacao, jogo
  const [modo_selecionado, setModoSelecionado] = useState(null)
  const [personagem, setPersonagem] = useState(null)

  const handleModoSelecionado = (modo) => {
    setModoSelecionado(modo)
    setTelaAtual('criacao')
  }

  const handlePersonagemCriado = (personagem) => {
    setPersonagem(personagem)
    setTelaAtual('jogo')
    console.log('Personagem criado:', personagem)
  }

  return (
    <div className="app">
      {tela_atual === 'menu' && (
        <ModoSelecao onModoSelecionado={handleModoSelecionado} />
      )}
      
      {tela_atual === 'criacao' && (
        <CriacaoPersonagem 
          modo={modo_selecionado}
          onPersonagemCriado={handlePersonagemCriado}
        />
      )}

      {tela_atual === 'jogo' && (
        <div className="jogo-container">
          <h1>🎮 Jogo Iniciado!</h1>
          <p>Bem-vindo, {personagem?.nome}!</p>
          <p>Modo: {personagem?.modo}</p>
          <p>Partido: {personagem?.partido_id}</p>
          <button onClick={() => setTelaAtual('menu')}>← Menu Principal</button>
        </div>
      )}
    </div>
  )
}

export default App
