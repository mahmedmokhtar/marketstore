import { Component } from '@angular/core';
import { SHARED } from '../../../shared/shared';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  imports: [SHARED],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  fachevronright=faChevronRight
}
