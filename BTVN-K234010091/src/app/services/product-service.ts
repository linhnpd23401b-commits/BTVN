import { Injectable } from '@angular/core';
@Injectable()
export class ProductService { 
  productsImage=[ 
    // Gia mau (VND) cho bai tap, khong phai gia ban thuc te.
    {"ProductId":"p1","ProductName":"Lenovo IdeaPad Pro 5i","Price":25990000,"Image":"/assets/ideapad-pro-5i-intel-2089.jpeg"},
    {"ProductId":"p2","ProductName":"Apple MacBook","Price":15990000,"Image":"/assets/images.jpg"},
    {"ProductId":"p3","ProductName":"Laptop Acer","Price":12990000,"Image":"/assets/images (1).jpg"},
  ] 
  constructor() { } 
  getProductsWithImages() 
  { 
    return this.productsImage 
  } 
  getProductDetail(id:any){ 
    
    return this.productsImage.find(x=>x.ProductId==id) 
  } 
} 
