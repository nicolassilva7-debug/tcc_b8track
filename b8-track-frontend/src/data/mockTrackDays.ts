export interface TrackDay {
  id: string;
  local: string;
  cidade: string;
  data: string;
  clima: string;
  temperatura: string;
  melhorVolta: string;
  variacao: string; // ex: "-0.40s" ou "+1.78s"
  variacaoPositiva: boolean;
  numSessoes: number;
}

export const trackDays: TrackDay[] = [
  {
    id: 'td-1',
    local: 'Autódromo de Interlagos',
    cidade: 'São Paulo - SP',
    data: '12/05/2024',
    clima: 'Seco',
    temperatura: '24°C',
    melhorVolta: '1:46.80',
    variacao: '-0.40s',
    variacaoPositiva: true,
    numSessoes: 3,
  },
  {
    id: 'td-2',
    local: 'Autódromo de Goiânia',
    cidade: 'Goiânia - GO',
    data: '28/04/2024',
    clima: 'Seco',
    temperatura: '27°C',
    melhorVolta: '1:47.20',
    variacao: '-0.62s',
    variacaoPositiva: true,
    numSessoes: 4,
  },
  {
    id: 'td-3',
    local: 'Autódromo Velo Città',
    cidade: 'Mogi Guaçu - SP',
    data: '18/02/2024',
    clima: 'Seco',
    temperatura: '25°C',
    melhorVolta: '1:50.10',
    variacao: '+1.78s',
    variacaoPositiva: false,
    numSessoes: 3,
  },
];