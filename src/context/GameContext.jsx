import React, { createContext, useState, useCallback } from 'react'

export const GameContext = createContext()

export function GameProvider({ children, personagem_inicial }) {
  // Estado do jogo
  const [personagem, setPersonagem] = useState(personagem_inicial)
  const [turno_atual, setTurnoAtual] = useState(1)
  const [ano_atual, setAnoAtual] = useState(2026)
  const [mes_atual, setMesAtual] = useState(1)
  
  // Estado da economia
  const [economia, setEconomia] = useState({
    pib_crescimento: 1.5,
    desemprego: 6.4,
    inflacao: 2.4,
    confianca: 58,
    receita_fiscal: 0
  })

  // Estado político
  const [governo, setGoverno] = useState({
    partido_pm: 1, // PS
    partido_coligacao: 2, // PSD
    aprovacao: 54,
    estabilidade: 72
  })

  // Sondagens (apoio a cada partido)
  const [sondagens, setSondagens] = useState({
    1: 28, // PS
    2: 29, // PSD
    3: 23, // CH
    4: 7,  // BE
    5: 4,  // PCP
    6: 5,  // IL
    7: 2   // LIVRE
  })

  // Histórico de eventos
  const [eventos, setEventos] = useState([])

  // Notícias
  const [noticias, setNoticias] = useState([])

  // Avançar turno
  const avancarTurno = useCallback(() => {
    setTurnoAtual(prev => prev + 1)
    
    // Calcular novo mês/ano
    const novoMes = (mes_atual % 12) + 1
    const novoAno = mes_atual === 12 ? ano_atual + 1 : ano_atual
    
    setMesAtual(novoMes)
    setAnoAtual(novoAno)

    // Simular variações económicas
    setEconomia(prev => ({
      pib_crescimento: prev.pib_crescimento + (Math.random() - 0.5) * 0.5,
      desemprego: Math.max(3, prev.desemprego + (Math.random() - 0.5) * 0.8),
      inflacao: Math.max(0.5, prev.inflacao + (Math.random() - 0.5) * 0.6),
      confianca: Math.max(20, Math.min(90, prev.confianca + (Math.random() - 0.5) * 10)),
      receita_fiscal: prev.receita_fiscal + (Math.random() * 50 - 25)
    }))

    // Simular variações em sondagens
    setSondagens(prev => ({
      ...prev,
      1: Math.max(15, Math.min(40, prev + (Math.random() - 0.5) * 4)),
      2: Math.max(15, Math.min(40, prev + (Math.random() - 0.5) * 4)),
      3: Math.max(10, Math.min(30, prev + (Math.random() - 0.5) * 5)),
      4: Math.max(3, Math.min(15, prev + (Math.random() - 0.5) * 2)),
      5: Math.max(2, Math.min(8, prev + (Math.random() - 0.5) * 1)),
      6: Math.max(2, Math.min(10, prev + (Math.random() - 0.5) * 2)),
      7: Math.max(1, Math.min(5, prev + (Math.random() - 0.5) * 1))
    }))

    // Gerar evento aleatório
    gerarEventoAleatorio()
  }, [mes_atual, ano_atual])

  // Gerar evento aleatório
  const gerarEventoAleatorio = useCallback(() => {
    const tipos_eventos = [
      {
        tipo: 'escandalo',
        titulo: 'Escândalo: Deputado envolvido em transações suspeitas',
        impacto_reputacao: -15,
        impacto_sondagem: -3
      },
      {
        tipo: 'crise_economica',
        titulo: 'Crise económica: Mercado cai 5%',
        impacto_desemprego: 1.5,
        impacto_confianca: -20
      },
      {
        tipo: 'oportunidade',
        titulo: 'Novo investimento estrangeiro atrai 500 empregos',
        impacto_desemprego: -0.3,
        impacto_reputacao: 8
      },
      {
        tipo: 'greve',
        titulo: 'Sindicatos anunciam greve geral',
        impacto_confianca: -15,
        impacto_aprovacao: -10
      },
      {
        tipo: 'reforma_sucesso',
        titulo: 'Reforma de educação tem resultados positivos',
        impacto_reputacao: 12,
        impacto_aprovacao: 8
      }
    ]

    const evento_aleatorio = tipos_eventos[Math.floor(Math.random() * tipos_eventos.length)]
    
    setEventos(prev => [
      {
        turno: turno_atual,
        ...evento_aleatorio,
        data: `${mes_atual}/${ano_atual}`
      },
      ...prev.slice(0, 9) // Manter últimos 10 eventos
    ])

    // Gerar notícia
    gerarNoticia(evento_aleatorio)

    // Aplicar impactos do evento
    if (evento_aleatorio.impacto_reputacao) {
      setPersonagem(prev => ({
        ...prev,
        metricas: {
          ...prev.metricas,
          reputacao: Math.max(0, Math.min(100, prev.metricas.reputacao + evento_aleatorio.impacto_reputacao))
        }
      }))
    }

    if (evento_aleatorio.impacto_desemprego) {
      setEconomia(prev => ({
        ...prev,
        desemprego: Math.max(3, prev.desemprego + evento_aleatorio.impacto_desemprego)
      }))
    }

    if (evento_aleatorio.impacto_confianca) {
      setEconomia(prev => ({
        ...prev,
        confianca: Math.max(20, Math.min(90, prev.confianca + evento_aleatorio.impacto_confianca))
      }))
    }

    if (evento_aleatorio.impacto_aprovacao) {
      setGoverno(prev => ({
        ...prev,
        aprovacao: Math.max(10, Math.min(90, prev.aprovacao + evento_aleatorio.impacto_aprovacao))
      }))
    }
  }, [turno_atual, mes_atual, ano_atual])

  // Gerar notícia
  const gerarNoticia = useCallback((evento) => {
    let noticia_texto = ''
    let tipo_noticia = 'neutra'

    if (evento.tipo === 'escandalo') {
      noticia_texto = '🔴 ' + evento.titulo
      tipo_noticia = 'negativa'
    } else if (evento.tipo === 'crise_economica') {
      noticia_texto = '⚠️ ' + evento.titulo
      tipo_noticia = 'negativa'
    } else if (evento.tipo === 'oportunidade') {
      noticia_texto = '🟢 ' + evento.titulo
      tipo_noticia = 'positiva'
    } else if (evento.tipo === 'greve') {
      noticia_texto = '🟡 ' + evento.titulo
      tipo_noticia = 'negativa'
    } else if (evento.tipo === 'reforma_sucesso') {
      noticia_texto = '🟢 ' + evento.titulo
      tipo_noticia = 'positiva'
    }

    setNoticias(prev => [
      {
        id: Date.now(),
        texto: noticia_texto,
        tipo: tipo_noticia,
        turno: turno_atual
      },
      ...prev.slice(0, 14) // Manter últimas 15 notícias
    ])
  }, [turno_atual])

  // Atualizar reputação do personagem
  const atualizarReputacao = useCallback((delta) => {
    setPersonagem(prev => ({
      ...prev,
      metricas: {
        ...prev.metricas,
        reputacao: Math.max(0, Math.min(100, prev.metricas.reputacao + delta))
      }
    }))
  }, [])

  // Atualizar influência
  const atualizarInfluencia = useCallback((delta) => {
    setPersonagem(prev => ({
      ...prev,
      metricas: {
        ...prev.metricas,
        influencia: Math.max(0, Math.min(100, prev.metricas.influencia + delta))
      }
    }))
  }, [])

  return (
    <GameContext.Provider
      value={{
        // Personagem
        personagem,
        setPersonagem,
        atualizarReputacao,
        atualizarInfluencia,

        // Turnos e tempo
        turno_atual,
        ano_atual,
        mes_atual,
        avancarTurno,

        // Economia
        economia,
        setEconomia,

        // Governo
        governo,
        setGoverno,

        // Sondagens
        sondagens,
        setSondagens,

        // Eventos e notícias
        eventos,
        noticias
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
