import { Injectable } from '@angular/core';
import { Checkout } from '../models/car-model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: Checkout[] = [];

  addItem(item: Checkout): void {
    this.items.push(item);
  }

  getItems(): Checkout[] {
    return this.items;
  }

  getItemCount(): number {
    return this.items.length;
  }

  clearCart(): void {
    this.items = [];
  }
}
