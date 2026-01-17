export const GAME_MODES = {
  DEPUTADO: 'deputado',
  AUTARCA: 'autarca',
  PRESIDENTE: 'presidente',
  PRIMEIRO_MINISTRO: 'primeiro_ministro',
  SANDBOX: 'sandbox'
}

export const IDEOLOGIA_EIXOS = {
  ESQUERDA_DIREITA: 'esquerdaDireita',      // -1 = esquerda, +1 = direita
  AUTORITARIO_LIBERTARIO: 'autoritarioLibertario',  // -1 = autoritário, +1 = libertário
  EUROPEU_NACIONAL: 'europeuNacional'       // -1 = nacional, +1 = europeísta
}

export const CARREIRAS_POSSIVEIS = [
  { nivel: 1, cargo: 'Cidadão', descricao: 'Iniciar carreira do zero' },
  { nivel: 2, cargo: 'Deputado Júnior', descricao: 'Eleito para Assembleia' },
  { nivel: 3, cargo: 'Deputado Sénior', descricao: 'Experiência acumulada' },
  { nivel: 4, cargo: 'Presidente de Comissão', descricao: 'Liderança parlamentar' },
  { nivel: 5, cargo: 'Ministro', descricao: 'Membro do Governo' },
  { nivel: 6, cargo: 'Primeiro-Ministro', descricao: 'Chefe de Governo' },
  { nivel: 7, cargo: 'Presidente da República', descricao: 'Chefe de Estado' }
]

export const METRICAS_JOGADOR = {
  REPUTACAO: 'reputacao',           // 0-100
  INFLUENCIA: 'influencia',         // 0-100
  APOIO_BASE: 'apoio_base',         // 0-100
  ESCÁNDALOS: 'escandalos',         // 0-100 (negativo)
  EXPERIENCIA: 'experiencia'        // pontos
}

export const TURNOS_POR_ANO = 12  // 1 turno = 1 mês
export const DURACAO_MANDATO_DEPUTADO = 48  // 4 anos em turnos
export const DURACAO_MANDATO_PRESIDENTE = 60  // 5 anos em turnos
