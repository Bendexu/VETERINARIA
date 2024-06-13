import { Component, EventEmitter, Output } from '@angular/core';
import { CardMascota1Component } from "../../components/card-mascota-1/card-mascota-1.component";
import { CommonModule } from '@angular/common';
import { InformeGeneralComponent } from "../../components/informe-general/informe-general.component";
import { EventosPendientesComponent } from "../../components/eventos-pendientes/eventos-pendientes.component";
import { HistorialVacunacionComponent } from "../../components/historial-vacunacion/historial-vacunacion.component";
import { HistoriaClinicaComponent } from "../../components/historia-clinica/historia-clinica.component";
import { FormRegistroMascotasComponent } from "../../components/form-registro-mascotas/form-registro-mascotas.component";
import { VacunasProgramadasComponent } from "../../components/vacunas-programadas/vacunas-programadas.component";
import { CardImgRadiografiasComponent } from "../../components/card-img-radiografias/card-img-radiografias.component";
import { FormRegistroClienteComponent } from "../../components/form-registro-cliente/form-registro-cliente.component";
import { FormRegistroConsultasComponent } from "../../components/form-registro-consultas/form-registro-consultas.component";
import { FormRegistroVacunasComponent } from "../../components/form-registro-vacunas/form-registro-vacunas.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule,CardMascota1Component,InformeGeneralComponent, EventosPendientesComponent, HistorialVacunacionComponent, HistoriaClinicaComponent, FormRegistroMascotasComponent, VacunasProgramadasComponent, CardImgRadiografiasComponent, FormRegistroClienteComponent, FormRegistroConsultasComponent, FormRegistroVacunasComponent]
})
export class HomeComponent {
  mascotas={nombre: 'BRUNO', edad: '9 meses y 3 semanas', tipo: 'Canino', raza: 'Mestizo', imagen: 'assets/img/bichon-maltes 1.png'}
  mascotas2={nombre: 'SHITARA', edad: '9 meses y 3 semanas', tipo: 'Felino', raza: 'Mestizo', imagen: 'assets/img/bichon-maltes 2.png'}
  mascotas3={nombre: 'BLANQUITO', edad: '9 meses y 3 semanas', tipo: 'Felino', raza: 'Mestizo', imagen: 'assets/img/bichon-maltes 3.png'}

  
  vacuna = {
    fecha: '06-06-2024',
    hora: '3:30 p.m.',
    nombre: 'Parvovirus',
    farmaceutica: 'Vanguard D.A.'
  };

}
