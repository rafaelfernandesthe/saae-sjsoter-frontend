import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private http: HttpClient) { }

  getImoveis(params: any): Observable<any> {
    return this.http.get<any>('/api/imoveis', { params });
  }

  getImoveisById(id: number): Observable<any> {
    return this.http.get<any>(`/api/imoveis/${id}`);
  }
  
}
