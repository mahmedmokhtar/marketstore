import { Component } from '@angular/core';
import { SHARED } from '../../shared/shared';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resend-verify',
  imports: [SHARED],
  templateUrl: './resend-verify.html',
  styleUrl: './resend-verify.scss'
})
export class ResendVerify {
  faEnvelope = faEnvelope;

}
