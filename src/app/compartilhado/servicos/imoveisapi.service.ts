import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImoveisApiService {

  pathBase = '/api/imoveis';

  constructor(private http: HttpClient) { }

  salvarImoveis(imoveis: any): Observable<any> {
    return this.http.post<any>(this.pathBase, imoveis);
  }

  atualizarImovel(imovel: any): Observable<any> {
    return this.http.put<any>(`${this.pathBase}/${imovel.id}`, imovel);
  }

  getImoveis(params: any): Observable<any> {
    return this.http.get<any>(this.pathBase, { params });
  }

  getImoveisById(id: number): Observable<any> {
    return this.http.get<any>(`${this.pathBase}/${id}`);
  }
  
}
