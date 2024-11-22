import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  http = inject(HttpClient);

  getDesignations(): Observable<any> {
    const obj = {
      clientId: 0,
      contactPersonName: 'string',
      companyName: 'string',
      address: 'string',
      city: 'string',
      pincode: 'string',
      state: 'string',
      employeeStrength: 0,
      gstNo: 'string',
      contactNo: 'string',
      regNo: 'string',
    };
    return this.http
      .put<any>(
        'https://freeapi.miniprojectideas.com/api/ClientStrive/AddUpdateClient',
        obj
      )
      .pipe(map((response) => response.data));
  }
}
