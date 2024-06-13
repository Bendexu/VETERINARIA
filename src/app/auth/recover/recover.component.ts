import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardMascota1Component } from "../../components/card-mascota-1/card-mascota-1.component";

@Component({
    selector: 'app-recover',
    standalone: true,
    templateUrl: './recover.component.html',
    styleUrl: './recover.component.css',
    imports: [ReactiveFormsModule]
})
export class RecoverComponent {

}
