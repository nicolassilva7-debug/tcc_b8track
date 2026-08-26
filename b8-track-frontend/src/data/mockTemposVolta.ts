// src/data/mockTemposVolta.ts

export interface TempoDeVolta {
  id: string;
  sessao: string;
  numeroVolta: number;
  tempo: string;
  melhorDaSessao: boolean;
}

export const temposDeVolta: TempoDeVolta[] = [
  { id: '1', sessao: 'Velo Città - Sessão 2', numeroVolta: 1, tempo: '1:52.10', melhorDaSessao: false },
  { id: '2', sessao: 'Velo Città - Sessão 2', numeroVolta: 2, tempo: '1:49.40', melhorDaSessao: false },
  { id: '3', sessao: 'Velo Città - Sessão 2', numeroVolta: 3, tempo: '1:46.80', melhorDaSessao: true },
  { id: '4', sessao: 'Velo Città - Sessão 2', numeroVolta: 4, tempo: '1:47.30', melhorDaSessao: false },
  { id: '5', sessao: 'Interlagos - Sessão 1', numeroVolta: 1, tempo: '1:51.00', melhorDaSessao: false },
  { id: '6', sessao: 'Interlagos - Sessão 1', numeroVolta: 2, tempo: '1:47.20', melhorDaSessao: true },
  { id: '7', sessao: 'Interlagos - Sessão 1', numeroVolta: 3, tempo: '1:48.50', melhorDaSessao: false },
];