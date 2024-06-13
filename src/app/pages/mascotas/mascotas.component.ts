import { Component } from '@angular/core';
import { CardMascota1Component } from "../../components/card-mascota-1/card-mascota-1.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-mascotas',
    standalone: true,
    templateUrl: './mascotas.component.html',
    styleUrl: './mascotas.component.css',
    imports: [CommonModule,CardMascota1Component]
})
export class MascotasComponent {
  mascotas={nombre: 'BRUNO', edad: '9 meses y 3 semanas', tipo: 'Canino', raza: 'Mestizo', imagen: 'assets/img/bichon-maltes 1.png'}
  mascotas2={nombre: 'SHITARA', edad: '9 meses y 3 semanas', tipo: 'Felino', raza: 'Mestizo', imagen: 'assets/img/bichon-maltes 2.png'}
  mascotas3={nombre: 'BLANQUITO', edad: '9 meses y 3 semanas', tipo: 'Felino', raza: 'Mestizo', imagen: 'assets/img/bichon-maltes 3.png'}


}
