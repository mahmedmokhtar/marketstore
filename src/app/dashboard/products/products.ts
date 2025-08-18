import { Component } from '@angular/core';
import { SHARED } from '../../shared/shared';
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { Icateogray } from '../../core/models/icateogray';
import { Product } from '../../core/services/product';
import { Iproduct } from '../../core/models/Iproduct';
@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['./products.scss'],
  imports : [SHARED]
})
export class ProductsComponent {
  allproduct:any  = []
  constructor(private proserv:Product){

  }
  faTrashAlt = faTrash ; faEye=faEye ; faEdit=faEdit;
  cateograylist:Icateogray[] =[
    {cateimage:"assets/img/cateogray/cate.png" , title:"Electronices Categories"},
    {cateimage:"assets/img/cateogray/cate2.png" , title:"jewelery Categories"},
    {cateimage:"assets/img/cateogray/cate3.png" , title:"Man Fash Categories"},
    {cateimage:"assets/img/cateogray/cate4.png" , title:"Women Fash Categories"},
  ]
 ngOnInit(){
  this.getallpro()
 }
  getallpro(){
    this.proserv.getall().subscribe((data) => this.allproduct = data)

    console.log(this.allproduct)
  }

}
