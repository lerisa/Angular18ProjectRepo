import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiDataStructure } from '../models/api-data-interface';
import { Designation } from '../models/designation-interface';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  http = inject(HttpClient);

  getDesignations(): Observable<Designation[]> {
    return this.http
      .get<ApiDataStructure<Designation>>(
        'https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignations'
      )
      .pipe(map((response) => response.data));
  }
}
