import { Injectable } from '@angular/core';
import { carModels } from '../mock/car-data';
import { CarModel } from '../models/car-model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private carModels: CarModel[] = carModels;

  getCarModels(): CarModel[] {
    return this.carModels;
  }

  getModelData(modelName: string): CarModel | undefined {
    return this.carModels.length > 0
      ? this.carModels.find((model) => model.name === modelName)
      : undefined;
  }
}
