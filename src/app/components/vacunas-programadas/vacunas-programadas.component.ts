import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vacunas-programadas',
  standalone: true,
  imports: [],
  templateUrl: './vacunas-programadas.component.html',
  styleUrl: './vacunas-programadas.component.css'
})
export class VacunasProgramadasComponent {
  @Input()fecha!: string;
  @Input()hora!: string;
  @Input()nombre!: string;
  @Input()farmaceutica!: string;
  
  constructor() { }

  ngOnInit(): void { }
}
