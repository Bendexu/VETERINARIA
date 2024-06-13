import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormRegistroConsultasComponent } from '../form-registro-consultas/form-registro-consultas.component';

@Component({
  selector: 'app-historial-vacunacion',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormRegistroConsultasComponent],
  templateUrl: './historial-vacunacion.component.html',
  styleUrl: './historial-vacunacion.component.css'
})
export class HistorialVacunacionComponent {
  
  consulta = {
    fecha: '10-03-2024 12:15 p.m.',
    motivo: 'Fiebre, vómitos.',
    anamnesis: 'Comida balanceada, paseos al parque diarios, cachorros en casa. Consume la tercera parte de sus porciones desde hace una semana.',
    constantesFisiologicas: {
      peso: '7kg',
      temperatura: '39°C',
      lpm: '75 LPM'
    },
    diagnostico: 'Influenza - Confirmado',
    tratamiento: [
      '• Amoxicilina COMP. x 300mg.',
      '• Doxiciclina CAP. x 250mg.'
    ]
  };
  
  

}
