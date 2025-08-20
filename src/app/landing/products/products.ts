
import { Component } from '@angular/core';
import { Product } from '../../core/services/product';
import { SHARED } from '../../shared/shared';
import { MyProduct } from './product/product';

@Component({
  selector: 'app-products',
  imports: [SHARED, MyProduct ],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {
  data:any =[]
  allcart:any = [];
  constructor(private productService: Product ) {

  }
  ngOnInit(){
    this.getAlProduct()
  }
  getAlProduct(){
    this.productService.getall().subscribe(item=> this.data = item);

  }
  addTocart(items:any){
    if("cart" in localStorage){
      this.allcart= JSON.parse(localStorage.getItem("cart") || "[]");
      let index = this.allcart.find((i:any)=> i.id == items.id);
      if(index){
          window.alert('this product in cart already');
      }else{
        this.allcart.push(items);
        localStorage.setItem("cart",JSON.stringify(this.allcart));
        window.alert('add thid product in cart success');
      }
    }else{

      this.allcart.push(items);
      localStorage.setItem("cart",JSON.stringify(this.allcart));
      window.alert('add thid product in cart success');
    }
  }
}
