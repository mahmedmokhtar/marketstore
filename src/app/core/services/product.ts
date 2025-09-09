import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../Environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Product {
  constructor(private http:HttpClient){

  }
  getall(){
  return  this.http.get(environment.apiUrl + "products")
  }
  getproduct(id:any){
    return this.http.get(environment.apiUrl + "products/" + id)
  }
  addproduct(model:any){
    return this.http.post(environment.apiUrl + "products", model)
  }
  deleteproduct(id:any){
    return this.http.delete(environment.apiUrl + "products/" + id)
  }
  updateProduct(id:any){
    return this.http.put(environment.apiUrl+'products/',id)
  }
}
