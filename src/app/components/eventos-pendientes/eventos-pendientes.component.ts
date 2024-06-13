import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eventos-pendientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventos-pendientes.component.html',
  styleUrl: './eventos-pendientes.component.css'
})
export class EventosPendientesComponent {
  eventos = [
    { fecha: '3 de junio 2024', hora: '10:00 AM', descripcion: 'Vacuna' },
    { fecha: '4 de junio 2024', hora: '2:00 PM', descripcion: 'Baño' },
    { fecha: '5 de junio 2024', hora: '8:00 AM', descripcion: 'Control' }
  ];

  constructor() { }
  
 
}
