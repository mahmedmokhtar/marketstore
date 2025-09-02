import { OwlModule } from 'ngx-owl-carousel';
import { SHARED } from './../../../shared/shared';

import { Component } from '@angular/core';




@Component({
  selector: 'app-testimonail',
  imports: [SHARED],
  templateUrl: './testimonail.html',
  styleUrl: './testimonail.scss'
})
export class Testimonail {
SlideOptions = { items: 1, dots: true, nav: true };
Images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
}
