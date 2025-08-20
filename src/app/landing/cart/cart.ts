import { Component } from '@angular/core';
import { SHARED } from '../../shared/shared';

@Component({
  selector: 'app-cart',
  imports: [SHARED],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
  cartItems=[]
constructor(){}
  ngOnInit() {
    this.getCartItems();
  }

  getCartItems() {
   if ("cart" in localStorage) {
      this.cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
      console.log(this.cartItems);
    }else{
      this.cartItems = [];
      window.alert('No items in cart');
    }
  }

  // removeFromCart(item: any) {
  //   let cart = this.getCartItems();
  //   cart = cart.filter((i: any) => i.id !== item.id);
  //   localStorage.setItem('cart', JSON.stringify(cart));
  // }
}
