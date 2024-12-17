import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fatura } from '../models/fatura.model';

@Injectable({
  providedIn: 'root'
})
export class PixIntegrationService {
  private apiUrl = 'http://localhost:3000/pix'; // Exemplo de URL

  constructor(private http: HttpClient) { }

  gerarQRCode(fatura: Fatura): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/gerar-qrcode`, { faturaId: fatura.id });
  }

  confirmarPagamento(faturaId: number, valor: number): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/confirmar-pagamento`, { faturaId, valor });
  }
}
