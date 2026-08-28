export interface RegistroTempo {
  id: string;
  data: string;
  trackDayLocal: string;
  motoNome: string;
  melhorVoltaSegundos: number;
  melhorVoltaTexto: string;
}

export const registrosTempo: RegistroTempo[] = [
  { id: 't1', data: '18/02/2024', trackDayLocal: 'Velo Città', motoNome: 'Yamaha R6', melhorVoltaSegundos: 106.8, melhorVoltaTexto: '1:46.80' },
  { id: 't2', data: '28/04/2024', trackDayLocal: 'Autódromo de Goiânia', motoNome: 'Yamaha R6', melhorVoltaSegundos: 107.2, melhorVoltaTexto: '1:47.20' },
  { id: 't3', data: '12/05/2024', trackDayLocal: 'Autódromo de Interlagos', motoNome: 'Yamaha R6', melhorVoltaSegundos: 106.8, melhorVoltaTexto: '1:46.80' },
];

export function formatTime(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = (totalSeconds % 60).toFixed(2);
  return `${minutes}:${seconds.padStart(5, '0')}`;
}