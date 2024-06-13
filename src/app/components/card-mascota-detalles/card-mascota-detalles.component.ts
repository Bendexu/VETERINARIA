import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-mascota-detalles',
  standalone: true,
  imports: [],
  templateUrl: './card-mascota-detalles.component.html',
  styleUrl: './card-mascota-detalles.component.css'
})
export class CardMascotaDetallesComponent {
  @Input() mascota: any;
}
