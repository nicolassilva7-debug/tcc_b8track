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
  {
    id: '1',
    trackDay: 'Track Day Velo Città',
    local: 'Velo Città',
    data: '18/02/2024',
    numeroSessao: 1,
    clima: 'Seco',
    qtdVoltas: 8,
    melhorVolta: '1:48.90',
  },
  {
    id: '2',
    trackDay: 'Track Day Velo Città',
    local: 'Velo Città',
    data: '18/02/2024',
    numeroSessao: 2,
    clima: 'Seco',
    qtdVoltas: 10,
    melhorVolta: '1:46.80',
  },
  {
    id: '3',
    trackDay: 'Track Day Interlagos',
    local: 'Interlagos',
    data: '12/11/2023',
    numeroSessao: 1,
    clima: 'Nublado',
    qtdVoltas: 7,
    melhorVolta: '1:47.20',
  },
  {
    id: '4',
    trackDay: 'Track Day Velocitta',
    local: 'Velocitta',
    data: '15/07/2023',
    numeroSessao: 1,
    clima: 'Seco',
    qtdVoltas: 9,
    melhorVolta: '1:48.90',
  },
];