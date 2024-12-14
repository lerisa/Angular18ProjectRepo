import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLinkActive, RouterOutlet, RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  menuOpen = false;
  cartService!: CartService;

  constructor(cartService: CartService) {
    this.cartService = cartService;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  carModels = [
    { id: 1, name: 'Ferrari 488 GTB' },
    { id: 2, name: 'Ferrari F8 Tributo' },
    { id: 3, name: 'Ferrari Roma' },
    { id: 4, name: 'Ferrari Portofino M' },
    { id: 5, name: 'Ferrari 812 Superfast' },
    { id: 6, name: 'Ferrari GTC4Lusso' },
    { id: 7, name: 'Ferrari LaFerrari' },
    { id: 8, name: 'Ferrari SF90 Stradale' },
    { id: 9, name: 'Ferrari Monza SP1' },
    { id: 10, name: 'Ferrari Enzo' },
  ];
}
