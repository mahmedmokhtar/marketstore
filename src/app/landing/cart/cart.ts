import { Component } from '@angular/core';
import { SHARED } from '../../shared/shared';
import * as toastr from 'toastr';
@Component({
  selector: 'app-cart',
  imports: [SHARED],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
  cartItems:any=[]
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
     toastr.error('No items in cart');
    }
  }
removeFromCart(item: any) {
  this.cartItems.splice(this.cartItems.indexOf(item), 1);
  localStorage.setItem('cart', JSON.stringify(this.cartItems));
  toastr.success('Item removed from cart');
  this.getCartItems();
}
  // removeFromCart(item: any) {
  //   let cart = this.getCartItems();
  //   cart = cart.filter((i: any) => i.id !== item.id);
  //   localStorage.setItem('cart', JSON.stringify(cart));
  // }
  clearCart(){
    localStorage.removeItem("cart");
    this.cartItems = [];
    toastr.success('Cart cleared successfully');
  }
  alltotal(){
    let total = 0;
    this.cartItems.forEach((item: any) => {
      total += item.price ;
    });
    return Math.floor(total);
  }
}
