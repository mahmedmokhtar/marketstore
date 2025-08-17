import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { SHARED } from '../../shared/shared';

@Component({
  selector: 'app-verify',
  imports: [SHARED, FontAwesomeModule],
  templateUrl: './verify.html',
  styleUrl: './verify.scss'
})
export class Verify {
facCheck = faCheck;
}
