import { Component } from '@angular/core';
import { CatalogService } from '../services/catalog-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog-product',
  standalone: false,
  styleUrl: './catalog-product.css',
  templateUrl: './catalog-product.html',
})
export class CatalogProduct {
  public categories:any 
  constructor(pservice: CatalogService,private router:Router){ 
    this.categories=pservice.getCategories() 
  } 
  viewDetail(f:any) 
  { 
    this.router.navigate(['service-product-image-event',f.ProductId]) 
  } 
}
