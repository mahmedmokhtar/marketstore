
import { TopNav } from '../top-nav/top-nav';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { SHARED } from '../../shared/shared';
import { Slider } from '../components/slider/slider';
import { Product } from '../../core/services/product';
import { Component , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Swiper } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-my-shop',
  imports: [TopNav,SHARED,Slider],
  templateUrl: './my-shop.html',
  styleUrl: './my-shop.scss',
schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyShop {
  allprod:any=[]
  constructor(private serper:Product){

  }
  ngOnInit(){
    this.getall()

  }
  faBars = faBars
  links:string[] = ["about","products" , "carts" , "blog" , "contact"]
  getall(){
     this.serper.getall().subscribe((res:any)=>{
      this.allprod = res
      console.log(res)
     })
  }
  onProgress(event: CustomEvent<[Swiper, number]>) {
    const [swiper, progress] = event.detail;
    console.log(progress);
  }

  onSlideChange() {
    console.log('slide changed');
  }
}
