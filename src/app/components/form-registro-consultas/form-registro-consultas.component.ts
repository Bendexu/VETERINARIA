import { Component } from '@angular/core';
import { HistoriaClinicaComponent } from '../historia-clinica/historia-clinica.component';

@Component({
  selector: 'app-form-registro-consultas',
  standalone: true,
  imports: [HistoriaClinicaComponent],
  templateUrl: './form-registro-consultas.component.html',
  styleUrl: './form-registro-consultas.component.css'
})
export class FormRegistroConsultasComponent {

}
