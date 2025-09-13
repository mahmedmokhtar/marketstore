
import { SHARED } from '../../../shared/shared';
import { Component , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Swiper } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';
@Component({
  selector: 'app-slider',
  imports: [SHARED],
  templateUrl: './slider.html',
  styleUrl: './slider.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Slider {
 onProgress(event: CustomEvent<[Swiper, number]>) {
    const [swiper, progress] = event.detail;
    console.log(progress);
  }

  onSlideChange() {
    console.log('slide changed');
  }
}
