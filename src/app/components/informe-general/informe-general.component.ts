import { Component, Input } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';

@Component({
  selector: 'app-informe-general',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './informe-general.component.html',
  styleUrl: './informe-general.component.css'
})
export class InformeGeneralComponent {
  @Input() name!: string;
  @Input() dni!: string;
  @Input() phone!: string;
  @Input() address!: string;
  @Input() country!: string;
  @Input() department!: string;
  @Input() province!: string;
}
