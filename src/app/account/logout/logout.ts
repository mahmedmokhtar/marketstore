import { Component } from '@angular/core';
import { SHARED } from '../../shared/shared';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-logout',
  imports: [SHARED],
  templateUrl: './logout.html',
  styleUrl: './logout.scss'
})
export class Logout {
faSignOutAlt = faSignOutAlt; // Importing the actual icon from FontAwesome
}
