import { faEye, faLightbulb, faShuffle, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { SHARED } from '../../../shared/shared';

@Component({
  selector: 'app-myservices',
  templateUrl: './services.html',
  styleUrl: './services.scss',
  imports:[SHARED],
  standalone:true

})
export class  myServices {
faEye=faEye; fatroohy=faTrophy;falightbulb = faLightbulb;fashuffle=faShuffle
}
