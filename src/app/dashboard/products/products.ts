import { Component } from '@angular/core';
import { SHARED } from '../../shared/shared';
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { Icateogray } from '../../core/models/icateogray';
import { Product } from '../../core/services/product';
import { Iproduct } from '../../core/models/Iproduct';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as toastr from 'toastr';
@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['./products.scss'],
  imports : [SHARED]
})
export class ProductsComponent {
  allproduct:any  = []
  imageUrl:string = '';
  formprod!:FormGroup
  constructor(private proserv:Product, private fb:FormBuilder){

  }
  faTrashAlt = faTrash ; faEye=faEye ; faEdit=faEdit;
  cateograylist:Icateogray[] =[
    {cateimage:"assets/img/cateogray/cate.png" , title:"Electronices Categories"},
    {cateimage:"assets/img/cateogray/cate2.png" , title:"jewelery Categories"},
    {cateimage:"assets/img/cateogray/cate3.png" , title:"Man Fash Categories"},
    {cateimage:"assets/img/cateogray/cate4.png" , title:"Women Fash Categories"},
  ]
 ngOnInit(){
  this.formprod= this.fb.group ({
      title:['',Validators.required],
      price:['',Validators.required],
      description:['',Validators.required],
      category: ['',Validators.required],
      image: ['',Validators.required]
  })
  this.getallpro()
 }
  getallpro(){
    this.proserv.getall().subscribe((data) => this.allproduct = data)

    console.log(this.allproduct)
  }
  getimagepath(event:any){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
       this.imageUrl = e.target.result;

    };
  }
  addproduct(){
   const model = this.formprod.value;
   this.proserv.addproduct(model).subscribe((res) => {
    console.log(res);
    toastr.success('Product added to  successfully');
    this.getallpro();
  })
  }
  deleteproduct(id:any){
    this.proserv.deleteproduct(id).subscribe((res) => {
      console.log(res);
      toastr.error('Product deleted successfully');
      this.getallpro();
    })
  }
  updatepro(item:any){
    this.formprod.get('title')?.setValue(item.title)
    this.formprod.get('price')?.setValue(item.price)
    this.formprod.get('description')?.setValue(item.description)
    this.formprod.get('category')?.setValue(item.category)
    this.imageUrl = item.image

  }
  doneupdate(){
const model = this.formprod.value
  this.proserv.updateProduct(model.id).subscribe ((res:any)=>{
    toastr.success('Product added to  successfully');
    this.getallpro();
  })
  }
}
