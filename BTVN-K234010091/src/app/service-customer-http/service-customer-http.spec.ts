import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceCustomerHttp } from './service-customer-http';

describe('ServiceCustomerHttp', () => {
  let component: ServiceCustomerHttp;
  let fixture: ComponentFixture<ServiceCustomerHttp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceCustomerHttp],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceCustomerHttp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
