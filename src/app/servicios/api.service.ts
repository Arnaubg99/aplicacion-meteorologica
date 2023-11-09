import { Injectable, inject } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http: HttpClient = inject(HttpClient)
  getDatos(ruta: string):Observable<any>{
    return this.http.get(`${environment.API_URL}${ruta}`).pipe(
      catchError(error =>{
        throw new Error(error);
      })
    );
  }
}