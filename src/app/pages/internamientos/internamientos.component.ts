import { Component } from '@angular/core';
import { CardMascota1Component } from "../../components/card-mascota-1/card-mascota-1.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-internamientos',
    standalone: true,
    templateUrl: './internamientos.component.html',
    styleUrl: './internamientos.component.css',
    imports: [CardMascota1Component,CommonModule]
})
export class InternamientosComponent {
  mascotas = [
    { nombre: 'BRUNO', edad: '9 meses y 3 semanas', tipo: 'Canino', raza: 'Mestizo', imagen: 'assets/img/bichon-maltes 1.png' },
    { nombre: 'SHITARA', edad: '9 meses y 3 semanas', tipo: 'Felino', raza: 'Mestizo', imagen: 'assets/img/bichon-maltes 2.png' },
    { nombre: 'BLANQUITO', edad: '9 meses y 3 semanas', tipo: 'Felino', raza: 'Mestizo', imagen: 'assets/img/bichon-maltes 3.png' }
  ];


}
