import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fatura } from '../models/fatura.model';

@Injectable({
  providedIn: 'root'
})
export class FaturasService {
  private apiUrl = 'http://localhost:3000/faturas'; // Exemplo de URL

  constructor(private http: HttpClient) { }

  getFaturas(): Observable<Fatura[]> {
    return this.http.get<Fatura[]>(this.apiUrl);
  }

  getFaturaById(id: number): Observable<Fatura> {
    return this.http.get<Fatura>(`${this.apiUrl}/${id}`);
  }

  criarFatura(fatura: Fatura): Observable<Fatura> {
    return this.http.post<Fatura>(this.apiUrl, fatura);
  }

  atualizarFatura(id: number, fatura: Fatura): Observable<Fatura> {
    return this.http.put<Fatura>(`${this.apiUrl}/${id}`, fatura);
  }

  excluirFatura(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
