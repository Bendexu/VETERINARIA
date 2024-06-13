import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  clientes = [
    {
      nombre: 'JULIO TORRES TELLO',
      dni: '7412589',
      telefono: '963258741',
      direccion: 'Av. San Martín 905'
    },
    {
      nombre: 'FIORELLA SERVANTES QUISPE',
      dni: '6541237',
      telefono: '987456321',
      direccion: 'Calle Bolívar 321'
    }
  ];

}
