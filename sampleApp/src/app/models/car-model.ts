export interface CarModel {
  name: string;
  parts: string[];
  prices: number[];
}

export interface Checkout {
  modelName: string;
  part: string;
  price: number;
}
