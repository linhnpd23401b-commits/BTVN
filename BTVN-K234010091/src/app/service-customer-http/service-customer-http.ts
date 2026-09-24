import { Component, OnInit } from '@angular/core';
import { CustomerHttpService } from '../services/customer-http-service';
import { ICustomer } from '../classes/ICustomer';

@Component({
  selector: 'app-service-customer-http',
  standalone: false,
  styleUrl: './service-customer-http.css',
  templateUrl: './service-customer-http.html',
})
export class ServiceCustomerHttp implements OnInit {
  customerGroups: ICustomer[] = [];
  errorMessage = '';

  constructor(private _service: CustomerHttpService) { }

  ngOnInit(): void {
    this._service.getCustomers().subscribe({
      next: (data) => this.customerGroups = data,
      error: (error) => {
        console.error('Unable to load customers', error);
        this.errorMessage = 'Không thể tải dữ liệu khách hàng.';
      },
    });
  }
}
