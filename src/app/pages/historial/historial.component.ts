import { Component } from '@angular/core';
import { CardMascotaDetallesComponent } from "../../components/card-mascota-detalles/card-mascota-detalles.component";
import { HistoriaClinicaComponent } from "../../components/historia-clinica/historia-clinica.component";
import { EventosPendientesComponent } from "../../components/eventos-pendientes/eventos-pendientes.component";
import { VacunasProgramadasComponent } from "../../components/vacunas-programadas/vacunas-programadas.component";
import { HistorialVacunacionComponent } from "../../components/historial-vacunacion/historial-vacunacion.component";
import { FormRegistroConsultasComponent } from '../../components/form-registro-consultas/form-registro-consultas.component';
import { CardImgRadiografiasComponent } from "../../components/card-img-radiografias/card-img-radiografias.component";

@Component({
    selector: 'app-historial',
    standalone: true,
    templateUrl: './historial.component.html',
    styleUrl: './historial.component.css',
    imports: [CardMascotaDetallesComponent, HistoriaClinicaComponent, EventosPendientesComponent, VacunasProgramadasComponent, HistorialVacunacionComponent, FormRegistroConsultasComponent, CardImgRadiografiasComponent]
})
export class HistorialComponent {
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
