import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl:'./login.component.html',
    styleUrl: './login.component.css',
    imports: [ReactiveFormsModule]
})
export class LoginComponent {

}
