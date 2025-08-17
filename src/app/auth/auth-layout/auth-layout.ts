import { Component } from '@angular/core';
import { SHARED } from '../../shared/shared';

@Component({
  selector: 'app-auth',
  imports: [SHARED],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.scss'
})
export class AuthLayout {
imgauth :string = 'assets/img/auth.jpg'; // Path to the image file
}
