import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    styleUrl: './register.component.css',
    imports: [ReactiveFormsModule]
})
export class RegisterComponent {

}
