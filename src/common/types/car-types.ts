export interface CarModels {
  make: string;
  model: string;
}

export interface Vehicle extends CarModels {
  enginePowerPS: number;
  enginePowerKW: number;
  fuelType: string;
  bodyType: string;
  engineCapacity: number;
}
