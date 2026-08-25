// src/data/mockDashboard.ts

export interface EvolucaoDesempenho {
  etapa: string;
  data: string;
  potencia: number;
  torque: number;
}

export const evolucaoDesempenho: EvolucaoDesempenho[] = [
  { etapa: 'Original', data: '01/2023', potencia: 118, torque: 61 },
  { etapa: 'Escapamento', data: '05/2023', potencia: 122, torque: 63 },
  { etapa: 'Mapa de injeção', data: '09/2023', potencia: 125, torque: 64 },
  { etapa: 'Kit relação', data: '02/2024', potencia: 128, torque: 66 },
];

export interface EvolucaoTempo {
  trackDay: string;
  data: string;
  melhorVoltaSegundos: number;
}

export const evolucaoTempos: EvolucaoTempo[] = [
  { trackDay: 'Interlagos', data: '03/2023', melhorVoltaSegundos: 112.4 },
  { trackDay: 'Velocitta', data: '07/2023', melhorVoltaSegundos: 108.9 },
  { trackDay: 'Interlagos', data: '11/2023', melhorVoltaSegundos: 107.2 },
  { trackDay: 'Velo Città', data: '02/2024', melhorVoltaSegundos: 106.8 },
];

export interface Modificacao {
  id: string;
  nome: string;
  data: string;
  custo: number;
}

export const ultimasModificacoes: Modificacao[] = [
  { id: '1', nome: 'Kit relação 15/45', data: '02/2024', custo: 450 },
  { id: '2', nome: 'Mapa de injeção customizado', data: '09/2023', custo: 800 },
  { id: '3', nome: 'Escapamento Full System', data: '05/2023', custo: 3200 },
];

export const ultimoTrackDay = {
  local: 'Velo Città',
  data: '18/02/2024',
  clima: 'Seco',
  melhorVolta: '1:46.80',
  numSessoes: 4,
};

export const investimentoTotal = {
  total: 4450,
  numModificacoes: 3,
  percentualProjeto: 78,
};

export function formatTime(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = (totalSeconds % 60).toFixed(2);
  return `${minutes}:${seconds.padStart(5, '0')}`;
}