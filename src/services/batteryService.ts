import { BatteryStatus, TipoOperacion, HistoryEntry } from '../types';

let batteryStatus: BatteryStatus = {
  porcentaje: 0,             
  capacidadMaxima: 12,       
  ultimaModificacion: new Date().toISOString(),
};

let batteryHistory: HistoryEntry[] = [];

export const getBatteryStatus = (): BatteryStatus => {
  return {
    ...batteryStatus,
    porcentaje: parseFloat(((
        batteryStatus.porcentaje / batteryStatus.capacidadMaxima) * 100).toFixed(2)),
  };
};

export const chargeBattery = (amount: number): BatteryStatus => {
  const now = new Date().toISOString();

  const capacidadRestante = batteryStatus.capacidadMaxima - batteryStatus.porcentaje;

  if (amount > capacidadRestante) {
    console.error(`Error: La carga excede la capacidad restante. Solo puedes cargar hasta ${capacidadRestante} más.`);
    return getBatteryStatus();  
  }

  batteryStatus.porcentaje += amount;
  batteryStatus.ultimaModificacion = now;

  batteryHistory.push({
    id: batteryHistory.length + 1,
    tipoOperacion: 'charge',
    cantidadEnergia: amount,
    date: now,
  });

  return getBatteryStatus(); 
};

export const dischargeBattery = (amount: number): BatteryStatus => {
  const now = new Date().toISOString();

  if (amount > batteryStatus.porcentaje) {
    console.error(`Error: No hay suficiente carga para descargar. Solo puedes descargar hasta ${batteryStatus.porcentaje}.`);
    return getBatteryStatus(); 
  }

  batteryStatus.porcentaje -= amount;
  batteryStatus.ultimaModificacion = now;

  batteryHistory.push({
    id: batteryHistory.length + 1,
    tipoOperacion: 'discharge',
    cantidadEnergia: amount,
    date: now,
  });

  return getBatteryStatus();
};

export const getBatteryHistory = (): HistoryEntry[] => {
  return batteryHistory.slice(-20).reverse();
};
