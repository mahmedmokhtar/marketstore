import { faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
import { SHARED } from './../../../shared/shared';
import { SwiperContainer } from 'swiper/element';
import { Component , CUSTOM_ELEMENTS_SCHEMA,ViewChild} from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Swiper } from 'swiper/types';



@Component({
  selector: 'app-testimonail',
  imports: [SHARED],
  templateUrl: './testimonail.html',
  styleUrl: './testimonail.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Testimonail {
fastar = faStar; faplay = faPlay
  onProgress(event: CustomEvent<[Swiper, number]>) {
    const [swiper, progress] = event.detail;
    console.log(progress);
  }

  onSlideChange() {
    console.log('slide changed');
  }
}
