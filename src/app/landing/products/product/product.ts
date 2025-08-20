import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SHARED } from '../../../shared/shared';

@Component({
  selector: 'app-product',
  imports: [SHARED],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class MyProduct {
@Input() data:any;
@Output() addToCart= new EventEmitter();


  constructor() { }

  ngOnInit() {

  }

  addToCartHandler() {
    this.addToCart.emit(this.data);
  }

}
