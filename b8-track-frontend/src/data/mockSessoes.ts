// src/data/mockSessoes.ts

export interface Sessao {
  id: string;
  trackDay: string;
  local: string;
  data: string;
  numeroSessao: number;
  clima: string;
  qtdVoltas: number;
  melhorVolta: string;
}

export const sessoes: Sessao[] = [
  // =========================
  // TRACK DAY - INTERLAGOS
  // =========================
  {
    id: 's-1',
    trackDay: 'td-1',
    local: 'Autódromo de Interlagos',
    data: '12/05/2024',
    numeroSessao: 1,
    clima: 'Seco',
    qtdVoltas: 8,
    melhorVolta: '1:49.20',
  },
  {
    id: 's-2',
    trackDay: 'td-1',
    local: 'Autódromo de Interlagos',
    data: '12/05/2024',
    numeroSessao: 2,
    clima: 'Seco',
    qtdVoltas: 9,
    melhorVolta: '1:47.60',
  },
  {
    id: 's-3',
    trackDay: 'td-1',
    local: 'Autódromo de Interlagos',
    data: '12/05/2024',
    numeroSessao: 3,
    clima: 'Seco',
    qtdVoltas: 10,
    melhorVolta: '1:46.80',
  },

  // =========================
  // TRACK DAY - GOIÂNIA
  // =========================
  {
    id: 's-4',
    trackDay: 'td-2',
    local: 'Autódromo de Goiânia',
    data: '28/04/2024',
    numeroSessao: 1,
    clima: 'Seco',
    qtdVoltas: 7,
    melhorVolta: '1:49.10',
  },
  {
    id: 's-5',
    trackDay: 'td-2',
    local: 'Autódromo de Goiânia',
    data: '28/04/2024',
    numeroSessao: 2,
    clima: 'Seco',
    qtdVoltas: 8,
    melhorVolta: '1:48.30',
  },
  {
    id: 's-6',
    trackDay: 'td-2',
    local: 'Autódromo de Goiânia',
    data: '28/04/2024',
    numeroSessao: 3,
    clima: 'Seco',
    qtdVoltas: 9,
    melhorVolta: '1:47.80',
  },
  {
    id: 's-7',
    trackDay: 'td-2',
    local: 'Autódromo de Goiânia',
    data: '28/04/2024',
    numeroSessao: 4,
    clima: 'Seco',
    qtdVoltas: 10,
    melhorVolta: '1:47.20',
  },

  // =========================
  // TRACK DAY - VELO CITTÀ
  // =========================
  {
    id: 's-8',
    trackDay: 'td-3',
    local: 'Autódromo Velo Città',
    data: '18/02/2024',
    numeroSessao: 1,
    clima: 'Seco',
    qtdVoltas: 8,
    melhorVolta: '1:52.40',
  },
  {
    id: 's-9',
    trackDay: 'td-3',
    local: 'Autódromo Velo Città',
    data: '18/02/2024',
    numeroSessao: 2,
    clima: 'Seco',
    qtdVoltas: 9,
    melhorVolta: '1:51.20',
  },
  {
    id: 's-10',
    trackDay: 'td-3',
    local: 'Autódromo Velo Città',
    data: '18/02/2024',
    numeroSessao: 3,
    clima: 'Seco',
    qtdVoltas: 10,
    melhorVolta: '1:50.10',
  },
];