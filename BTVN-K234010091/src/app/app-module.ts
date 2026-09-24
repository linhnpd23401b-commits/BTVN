import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeWork } from './home-work/home-work';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail';
import { ServiceProductImageEvent } from './service-product-image-event/service-product-image-event';
import { ProductService } from './services/product-service';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CatalogProduct } from './catalog-product/catalog-product';
import { ServiceCustomerHttp } from './service-customer-http/service-customer-http';
import { CustomerHttpService } from './services/customer-http-service';

@NgModule({
  declarations: [
    App,
    HomeWork,
    ServiceProductImageEvent,
    ServiceProductImageEventDetailComponent,
    CatalogProduct,
    ServiceCustomerHttp,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ProductService, CustomerHttpService],
  bootstrap: [App],
})
export class AppModule {}
