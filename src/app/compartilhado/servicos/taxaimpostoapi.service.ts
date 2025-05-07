import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaxaImpostoApiService {

  private pathBase = '/api/taxaImposto';

  constructor(private http: HttpClient) {}

  salvar(taxa: any): Observable<any> {
    return this.http.post<any>(this.pathBase, taxa);
  }

  atualizar(taxa: any): Observable<any> {
    return this.http.put<any>(`${this.pathBase}/${taxa.id}`, taxa);
  }

  listar(params?: any): Observable<any> {
    return this.http.get<any>(this.pathBase, { params });
  }

  buscarPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.pathBase}/${id}`);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete<any>(`${this.pathBase}/${id}`);
  }
}
