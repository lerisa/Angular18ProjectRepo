import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarModel } from '../../models/car-model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-model-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './model-list.component.html',
  styleUrl: './model-list.component.scss',
})
export class ModelListComponent {
  carModels: CarModel[] = [];

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.carModels = this.dataService.getCarModels();
  }

  viewModel(name: string): void {
    this.router.navigate(['/model', name]);
  }
}
