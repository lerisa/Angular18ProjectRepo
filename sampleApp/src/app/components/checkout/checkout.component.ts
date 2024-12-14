import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Checkout } from '../../models/car-model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  items: Checkout[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = [];
  }
}
