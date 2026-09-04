// src/data/mockDashboard.ts

export interface EvolucaoDesempenho {
  etapa: string;
  data: string;
  potencia: number;
  torque: number;
}

export interface EvolucaoTempo {
  trackDay: string;
  data: string;
  melhorVoltaSegundos: number;
}

export interface Modificacao {
  id: string;
  nome: string;
  data: string;
  custo: number;
}

export interface DashboardMoto {
  id: string;
  nome: string;

  potenciaOriginal: number;
  potenciaAtual: number;

  torqueOriginal: number;
  torqueAtual: number;

  pesoOriginal: number;
  pesoAtual: number;

  melhorVoltaOriginal: string;
  melhorVoltaAtual: string;

  variacaoPotencia: number;
  variacaoTorque: number;
  variacaoPeso: number;
  variacaoTempo: string;

  evolucaoDesempenho: EvolucaoDesempenho[];
  evolucaoTempos: EvolucaoTempo[];

  ultimasModificacoes: Modificacao[];

  ultimoTrackDay: {
    local: string;
    data: string;
    clima: string;
    melhorVolta: string;
    numSessoes: number;
  };

  investimentoTotal: {
    total: number;
    numModificacoes: number;
    percentualProjeto: number;
  };
}


/* =========================================
   YAMAHA R6
========================================= */

export const dashboardR6: DashboardMoto = {
  id: 'moto-1',
  nome: 'YAMAHA R6',

  potenciaOriginal: 118,
  potenciaAtual: 128,

  torqueOriginal: 61,
  torqueAtual: 66,

  pesoOriginal: 189,
  pesoAtual: 184,

  melhorVoltaOriginal: '1:52.40',
  melhorVoltaAtual: '1:46.80',

  variacaoPotencia: 10,
  variacaoTorque: 5,
  variacaoPeso: -5,
  variacaoTempo: '-5.60s',

  evolucaoDesempenho: [
    {
      etapa: 'Original',
      data: '01/2023',
      potencia: 118,
      torque: 61,
    },
    {
      etapa: 'Escapamento',
      data: '05/2023',
      potencia: 122,
      torque: 63,
    },
    {
      etapa: 'Mapa de injeção',
      data: '09/2023',
      potencia: 125,
      torque: 64,
    },
    {
      etapa: 'Kit relação',
      data: '02/2024',
      potencia: 128,
      torque: 66,
    },
  ],

  evolucaoTempos: [
    {
      trackDay: 'Interlagos',
      data: '03/2023',
      melhorVoltaSegundos: 112.4,
    },
    {
      trackDay: 'Velo Città',
      data: '07/2023',
      melhorVoltaSegundos: 108.9,
    },
    {
      trackDay: 'Interlagos',
      data: '11/2023',
      melhorVoltaSegundos: 107.2,
    },
    {
      trackDay: 'Velo Città',
      data: '02/2024',
      melhorVoltaSegundos: 106.8,
    },
  ],

  ultimasModificacoes: [
    {
      id: 'r6-1',
      nome: 'Kit relação 15/45',
      data: '02/2024',
      custo: 450,
    },
    {
      id: 'r6-2',
      nome: 'Mapa de injeção customizado',
      data: '09/2023',
      custo: 800,
    },
    {
      id: 'r6-3',
      nome: 'Escapamento Full System',
      data: '05/2023',
      custo: 3200,
    },
  ],

  ultimoTrackDay: {
    local: 'Velo Città',
    data: '18/02/2024',
    clima: 'Seco',
    melhorVolta: '1:46.80',
    numSessoes: 4,
  },

  investimentoTotal: {
    total: 4450,
    numModificacoes: 3,
    percentualProjeto: 78,
  },
};


/* =========================================
   HONDA CBR 600RR
========================================= */

export const dashboardCBR: DashboardMoto = {
  id: 'moto-2',
  nome: 'HONDA CBR 600RR',

  potenciaOriginal: 121,
  potenciaAtual: 125,

  torqueOriginal: 66,
  torqueAtual: 68,

  pesoOriginal: 194,
  pesoAtual: 191,

  melhorVoltaOriginal: '1:54.20',
  melhorVoltaAtual: '1:49.80',

  variacaoPotencia: 4,
  variacaoTorque: 2,
  variacaoPeso: -3,
  variacaoTempo: '-4.40s',

  evolucaoDesempenho: [
    {
      etapa: 'Original',
      data: '01/2024',
      potencia: 121,
      torque: 66,
    },
    {
      etapa: 'Escape',
      data: '03/2024',
      potencia: 123,
      torque: 67,
    },
    {
      etapa: 'Acerto ECU',
      data: '05/2024',
      potencia: 125,
      torque: 68,
    },
  ],

  evolucaoTempos: [
    {
      trackDay: 'Interlagos',
      data: '02/2024',
      melhorVoltaSegundos: 114.2,
    },
    {
      trackDay: 'Interlagos',
      data: '03/2024',
      melhorVoltaSegundos: 112.6,
    },
    {
      trackDay: 'Velo Città',
      data: '04/2024',
      melhorVoltaSegundos: 111.1,
    },
    {
      trackDay: 'Velo Città',
      data: '05/2024',
      melhorVoltaSegundos: 109.8,
    },
  ],

  ultimasModificacoes: [
    {
      id: 'cbr-1',
      nome: 'Acerto da ECU',
      data: '05/2024',
      custo: 1200,
    },
    {
      id: 'cbr-2',
      nome: 'Escapamento esportivo',
      data: '03/2024',
      custo: 2000,
    },
  ],

  ultimoTrackDay: {
    local: 'Velo Città',
    data: '18/05/2024',
    clima: 'Seco',
    melhorVolta: '1:49.80',
    numSessoes: 3,
  },

  investimentoTotal: {
    total: 3200,
    numModificacoes: 2,
    percentualProjeto: 42,
  },
};


/* =========================================
   MOTOS DISPONÍVEIS NO DASHBOARD
========================================= */

export const dashboards: DashboardMoto[] = [
  dashboardR6,
  dashboardCBR,
];


/* =========================================
   FORMATAR TEMPO
========================================= */

export function formatTime(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);

  const seconds = (totalSeconds % 60).toFixed(2);

  return `${minutes}:${seconds.padStart(5, '0')}`;
}