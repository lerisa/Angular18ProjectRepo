import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { of } from 'rxjs';
import { DesignationComponent } from './components/designation/designation.component';
import { RolesComponent } from './components/roles/roles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RolesComponent, DesignationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sampleApp';

  cards$ = of([
    {
      id: 1,
      title: 'mmmmmmmmmm 1',
      description: 'some description',
    },
    {
      id: 2,
      title: 'mmmmmmmmmm 2',
      description: 'some description',
    },
    {
      id: 3,
      title: 'mmmmmmmmmm 3',
      description: 'some description 3',
    },
  ]);
}
