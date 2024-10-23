import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DesignationComponent } from '../designation/designation.component';
import { RolesComponent } from '../roles/roles.component';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [RolesComponent, DesignationComponent, CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss',
})
export class MasterComponent {
  currentComponent: string = 'Roles';

  changeTab(tabName: string): void {
    this.currentComponent = tabName;
  }
}
