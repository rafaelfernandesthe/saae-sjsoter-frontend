import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeneficioApiService {

  pathBase = '/api/beneficios';  // Caminho para a API de benefícios

  constructor(private http: HttpClient) { }

  // Método para salvar um benefício
  salvarBeneficio(beneficio: any): Observable<any> {
    return this.http.post<any>(this.pathBase, beneficio);  // Envia o benefício para ser salvo
  }

  // Método para atualizar um benefício
  atualizarBeneficio(beneficio: any): Observable<any> {
    return this.http.put<any>(`${this.pathBase}/${beneficio.id}`, beneficio);  // Atualiza o benefício existente
  }

  // Método para obter a lista de benefícios com parâmetros de paginação
  getBeneficios(params: any): Observable<any> {
    return this.http.get<any>(this.pathBase, { params });  // Obtém a lista de benefícios com os parâmetros passados
  }

  // Método para obter um benefício por ID
  getBeneficioById(id: number): Observable<any> {
    return this.http.get<any>(`${this.pathBase}/${id}`);  // Obtém um benefício específico pelo ID
  }

  // Método para excluir um benefício
  deleteBeneficio(id: number): Observable<void> {
    return this.http.delete<void>(`${this.pathBase}/${id}`);  // Exclui um benefício pelo ID
  }
}
