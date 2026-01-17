import { useContext } from 'react'
import { GameContext } from '../context/GameContext'

export function useGame() {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error('useGame deve ser usado dentro de GameProvider')
  }
  return context
}
