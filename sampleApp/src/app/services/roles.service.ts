import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiDataStructure } from '../models/api-data-interface';
import { Role } from '../models/role-interface';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  http = inject(HttpClient);

  getRoles(): Observable<Role[]> {
    return this.http
      .get<ApiDataStructure>(
        'https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles'
      )
      .pipe(map((response) => response.data));
  }
}
