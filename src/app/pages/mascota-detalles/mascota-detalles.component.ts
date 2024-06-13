import { Component } from '@angular/core';
import { CardMascota1Component } from "../../components/card-mascota-1/card-mascota-1.component";
import { CardMascotaDetallesComponent } from "../../components/card-mascota-detalles/card-mascota-detalles.component";
import { HistoriaClinicaComponent } from "../../components/historia-clinica/historia-clinica.component";
import { VacunasProgramadasComponent } from "../../components/vacunas-programadas/vacunas-programadas.component";
import { EventosPendientesComponent } from "../../components/eventos-pendientes/eventos-pendientes.component";

@Component({
    selector: 'app-mascota-detalles',
    standalone: true,
    templateUrl: './mascota-detalles.component.html',
    styleUrl: './mascota-detalles.component.css',
    imports: [CardMascotaDetallesComponent, HistoriaClinicaComponent, VacunasProgramadasComponent, EventosPendientesComponent]
})
export class MascotaDetallesComponent {
  mascota = {
    nombre: 'BRUNO',
    especie: 'Canino',
    edad: ' 9 meses y 3 semanas',
    sexo: 'Macho',
    raza: 'Mestiso',
    esterilizado: true,
    propietario: 'Julio Torres Tello',
    imagen: 'https://via.placeholder.com/150' // URL de la imagen de la mascota
  };

  vacuna = {
    fecha: '06-06-2024',
    hora: '3:30 p.m.',
    nombre: 'Parvovirus',
    farmaceutica: 'Vanguard D.A.'
  };

}
