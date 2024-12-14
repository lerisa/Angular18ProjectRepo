import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-part-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './part-details.component.html',
  styleUrl: './part-details.component.scss',
})
export class PartDetailsComponent {
  modelName!: string;
  parts: string[] = [];
  prices: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.modelName = this.route.snapshot.paramMap.get('modelName') || '';
    const modelData = this.dataService.getModelData(this.modelName)!;

    if (modelData) {
      this.parts = modelData.parts;
      this.prices = modelData.prices;
    } else {
      console.error(`Model ${this.modelName} not found.`);
    }
  }

  addToCart(modelName: string, part: string, price: number): void {
    this.cartService.addItem({ modelName, part, price });
  }
}
