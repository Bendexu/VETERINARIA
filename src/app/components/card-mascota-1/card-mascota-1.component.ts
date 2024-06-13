import { Component, Input } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';

@Component({
  selector: 'app-card-mascota-1',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './card-mascota-1.component.html',
  styleUrl: './card-mascota-1.component.css'
})
export class CardMascota1Component {
  @Input() mascota: any;
}
