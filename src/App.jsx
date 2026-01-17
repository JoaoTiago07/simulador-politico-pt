import { useState } from 'react'
import './App.css'
import ModoSelecao from './components/ModoSelecao'
import CriacaoPersonagem from './components/CriacaoPersonagem'
import { GameProvider } from './context/GameContext'
import Dashboard from './components/Dashboard'

function App() {
  const [tela_atual, setTelaAtual] = useState('menu')
  const [modo_selecionado, setModoSelecionado] = useState(null)
  const [personagem, setPersonagem] = useState(null)

  const handleModoSelecionado = (modo) => {
    setModoSelecionado(modo)
    setTelaAtual('criacao')
  }

  const handlePersonagemCriado = (personagem_novo) => {
    setPersonagem(personagem_novo)
    setTelaAtual('jogo')
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

      {tela_atual === 'jogo' && personagem && (
        <GameProvider personagem_inicial={personagem}>
          <Dashboard onVoltar={() => setTelaAtual('menu')} />
        </GameProvider>
      )}
    </div>
  )
}

export default App
