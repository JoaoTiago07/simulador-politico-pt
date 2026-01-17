import React from 'react'
import '../styles/DashboardNoticias.css'
import { useGame } from '../hooks/useGame'

function DashboardNoticias() {
  const { noticias } = useGame()

  return (
    <div className="dashboard-noticias">
      <h2>📰 Notícias Políticas Recentes</h2>

      {noticias.length === 0 ? (
        <p className="sem-noticias">Sem notícias ainda. Avance meses para gerar eventos!</p>
      ) : (
        <div className="noticias-lista">
          {noticias.map((noticia) => (
            <div
              key={noticia.id}
              className={`noticia-item noticia-${noticia.tipo}`}
            >
              <div className="noticia-conteudo">
                <p className="noticia-texto">{noticia.texto}</p>
                <span className="noticia-turno">Turno {noticia.turno}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DashboardNoticias
