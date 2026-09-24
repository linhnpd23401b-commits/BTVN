import { HttpClient } from '@angular/common/http';
import { ICustomer } from '../classes/ICustomer';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, shareReplay, startWith, tap } from 'rxjs/operators';

@Injectable()
export class CustomerHttpService {
    private _url = '/assets/data/customers.json';
    private _customers: ICustomer[] | null = null;
    private _customersRequest$: Observable<ICustomer[]> | null = null;
    // Tuoi va email mau cho bai tap ve cac cong chua.
    private readonly _initialCustomers: ICustomer[] = [
  {
    "CustomerTypeId": 1,
    "CustomterTypeName": "VIP",
    "Customers": [
      {
        "Id": "Cus123",
        "Name": "Rapunzel",
        "Email": "rapunzel@example.com",
        "Age": 18,
        "Image": "assets/avatars/2024hbdisneyprincessrapunzel-1755313852553-17553138528321247551677.webp"
      },
      {
        "Id": "Cus456",
        "Name": "Cinderella",
        "Email": "cinderella@example.com",
        "Age": 19,
        "Image": "assets/avatars/images-motthegioi-vn_tuoi-that-cua-12-cong-chua-disney-hinh-anh-2.jpg"
      },
      {
        "Id": "Cus789",
        "Name": "Belle",
        "Email": "belle@example.com",
        "Age": 17,
        "Image": "assets/avatars/Princess_Belle.jpg"
      }
    ]
  },
  {
    "CustomerTypeId": 2,
    "CustomterTypeName": "Normal",
    "Customers": [
      {
        "Id": "Cus000",
        "Name": "Ariel",
        "Email": "ariel@example.com",
        "Age": 16,
        "Image": "assets/avatars/images.jpg"
      },
      {
        "Id": "Cus111",
        "Name": "Jasmine",
        "Email": "jasmine@example.com",
        "Age": 16,
        "Image": "assets/avatars/images-motthegioi-vn_tuoi-that-cua-12-cong-chua-disney-hinh-anh-11.jpg"
      }
    ]
  }
];

    constructor(private _http: HttpClient) { }

    getCustomers(): Observable<ICustomer[]> {
        if (this._customers) {
            return of(this._customers);
        }

        if (!this._customersRequest$) {
            this._customersRequest$ = this._http.get<ICustomer[]>(this._url).pipe(
                tap((customers) => this._customers = customers),
                catchError((error) => {
                    console.error('Unable to load customers', error);
                    this._customersRequest$ = null;
                    return of(this._initialCustomers);
                }),
                startWith(this._initialCustomers),
                shareReplay({ bufferSize: 1, refCount: false }),
            );
        }

        return this._customersRequest$;
    }
}
