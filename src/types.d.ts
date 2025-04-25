export type TipoOperacion = 'charge' | 'discharge';

export interface HistoryEntry {
  id: number;
  tipoOperacion: TipoOperacion;
  cantidadEnergia: number; 
  date: string;
}

export interface BatteryStatus {
  porcentaje: number;       
  capacidadMaxima: number; 
  ultimaModificacion: string; 
}

export type NewHistoryEntry = Omit<HistoryEntry, 'id'>;
