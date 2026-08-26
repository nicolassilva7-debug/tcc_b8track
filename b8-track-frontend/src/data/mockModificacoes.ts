export interface Modificacao {
  id: string;
  motoId: string;
  motoNome: string;
  nome: string;
  categoria: string;
  data: string;
  custo: number;
}

export const modificacoes: Modificacao[] = [
  {
    id: 'mod-1',
    motoId: 'moto-1',
    motoNome: 'Yamaha R6',
    nome: 'Kit relação 15/45',
    categoria: 'Transmissão',
    data: '02/2024',
    custo: 450,
  },
  {
    id: 'mod-2',
    motoId: 'moto-1',
    motoNome: 'Yamaha R6',
    nome: 'Mapa de injeção customizado',
    categoria: 'Eletrônica',
    data: '09/2023',
    custo: 800,
  },
  {
    id: 'mod-3',
    motoId: 'moto-1',
    motoNome: 'Yamaha R6',
    nome: 'Escapamento Full System',
    categoria: 'Escape',
    data: '05/2023',
    custo: 3200,
  },
  {
    id: 'mod-4',
    motoId: 'moto-2',
    motoNome: 'Honda CBR 600RR',
    nome: 'Pneus Pirelli Diablo Supercorsa',
    categoria: 'Pneus',
    data: '03/2024',
    custo: 1600,
  },
];