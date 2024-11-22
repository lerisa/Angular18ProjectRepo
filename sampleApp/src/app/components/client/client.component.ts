import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Client } from '../../models/client-interface';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss',
})
export class ClientComponent {
  clientObj!: Client;
}
