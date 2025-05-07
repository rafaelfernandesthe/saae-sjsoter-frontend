import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeneficioApiService {

  private pathBase = '/api/beneficios';

  constructor(private http: HttpClient) {}

  // Salva um novo benefício
  salvar(beneficio: any): Observable<any> {
    return this.http.post<any>(this.pathBase, beneficio);
  }

  // Atualiza um benefício existente
  atualizar(beneficio: any): Observable<any> {
    return this.http.put<any>(`${this.pathBase}/${beneficio.id}`, beneficio);
  }

  // Lista benefícios com paginação e ordenação (params opcionais)
  listar(params?: { [param: string]: string }): Observable<any> {
    return this.http.get<any>(this.pathBase, { params });
  }

  // Busca um benefício pelo ID
  buscarPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.pathBase}/${id}`);
  }

  // Exclui um benefício
  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.pathBase}/${id}`);
  }
}
