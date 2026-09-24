import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail';
import { ServiceProductImageEvent } from './service-product-image-event/service-product-image-event';
import { CatalogProduct } from './catalog-product/catalog-product';
import { ServiceCustomerHttp } from './service-customer-http/service-customer-http';

const routes: Routes = [
  { path: '', redirectTo: 'service-product-image-event', pathMatch: 'full' },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'service-product-image-event', component: ServiceProductImageEvent},
  { path: 'service-product-image-event/:id', component: ServiceProductImageEventDetailComponent},
  { path: 'app-catalog-product', component: CatalogProduct},
  {path:'app-service-customer-http',component:ServiceCustomerHttp},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
