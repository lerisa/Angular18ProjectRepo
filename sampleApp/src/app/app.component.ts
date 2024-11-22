import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { of } from 'rxjs';
import { MasterComponent } from './components/master/master.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MasterComponent,
    RouterLink,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  showCssGrid = false;
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
