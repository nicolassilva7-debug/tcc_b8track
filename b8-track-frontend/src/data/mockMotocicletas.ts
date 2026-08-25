export interface Motocicleta {
  id: string;
  marca: string;
  modelo: string;
  ano: number;
  fotoUrl?: string;
  potenciaOriginal: number;
  torqueOriginal: number;
  pesoOriginal: number;
  numModificacoes: number;
  melhorVolta?: string;
  percentualProjeto: number;
}

export const motocicletas: Motocicleta[] = [
  {
    id: 'moto-1',
    marca: 'YAMAHA',
    modelo: 'R6',
    ano: 2023,
    potenciaOriginal: 118,
    torqueOriginal: 61,
    pesoOriginal: 189,
    numModificacoes: 3,
    melhorVolta: '1:46.80',
    percentualProjeto: 78,
  },
  {
    id: 'moto-2',
    marca: 'HONDA',
    modelo: 'CBR 600RR',
    ano: 2021,
    potenciaOriginal: 121,
    torqueOriginal: 66,
    pesoOriginal: 194,
    numModificacoes: 0,
    percentualProjeto: 15,
  },
];