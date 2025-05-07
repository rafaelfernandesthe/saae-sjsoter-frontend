import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeneficioApiService {

  private pathBase = '/api/beneficios'; // URL base para a API de benefícios

  constructor(private http: HttpClient) { }

  // Método para salvar um novo benefício
  salvarBeneficio(beneficio: any): Observable<any> {
    return this.http.post<any>(this.pathBase, beneficio);  // Envia um POST para salvar o benefício
  }

  // Método para atualizar um benefício existente
  atualizarBeneficio(beneficio: any): Observable<any> {
    return this.http.put<any>(`${this.pathBase}/${beneficio.id}`, beneficio);  // Envia um PUT para atualizar o benefício
  }

  // Método para obter a lista de benefícios com parâmetros de paginação
  getBeneficios(params: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      httpParams = httpParams
        .set('page', params.page)
        .set('size', params.size);
      if (params.sort) {
        httpParams = httpParams.set('sort', params.sort);
      }
    }
    return this.http.get<any>(this.pathBase, { params: httpParams });
  }
  
  // Método para obter um benefício específico pelo ID
  getBeneficioById(id: number): Observable<any> {
    return this.http.get<any>(`${this.pathBase}/${id}`);  // Envia uma requisição GET para buscar o benefício por ID
  }

  // Método para excluir um benefício
  deleteBeneficio(id: number): Observable<void> {
    return this.http.delete<void>(`${this.pathBase}/${id}`);  // Envia uma requisição DELETE para excluir o benefício
  }
}
