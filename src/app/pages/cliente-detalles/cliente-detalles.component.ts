import { Component } from '@angular/core';
import { InformeGeneralComponent } from "../../components/informe-general/informe-general.component";
import { CardMascota1Component } from "../../components/card-mascota-1/card-mascota-1.component";
import { EventosPendientesComponent } from "../../components/eventos-pendientes/eventos-pendientes.component";

@Component({
    selector: 'app-cliente-detalles',
    standalone: true,
    templateUrl: './cliente-detalles.component.html',
    styleUrl: './cliente-detalles.component.css',
    imports: [InformeGeneralComponent, CardMascota1Component, EventosPendientesComponent]
})
export class ClienteDetallesComponent {
  mascotas={nombre: 'BRUNO', edad: '9 meses y 3 semanas', tipo: 'Canino', raza: 'Mestizo', imagen: 'assets/img/bichon-maltes 1.png'}
  mascotas2={nombre: 'SHITARA', edad: '9 meses y 3 semanas', tipo: 'Felino', raza: 'Mestizo', imagen: 'assets/img/bichon-maltes 2.png'}
}
