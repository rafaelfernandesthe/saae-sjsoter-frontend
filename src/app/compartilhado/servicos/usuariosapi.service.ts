import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosApiService {

  pathBase = '/api/usuarios';

  constructor(private http: HttpClient) { }

  salvarUsuarios(usuario: any): Observable<any> {
    return this.http.post<any>(this.pathBase, usuario);
  }

  atualizarUsuario(usuario: any): Observable<any> {
    var usuarioReq = {
      "id": usuario.id,
      "nome": usuario.nome,
      "cpf": usuario.cpf,
      "telefone": usuario.telefone,
      "email": usuario.email,
      "tipo": usuario.tipo,
      "ativo": usuario.ativo
    }
    return this.http.put<any>(`${this.pathBase}/${usuario.id}`, usuarioReq);
  }

  getUsuarios(params: any): Observable<any> {
    return this.http.get<any>(this.pathBase, { params });
  }

  getUsuariosById(id: number): Observable<any> {
    return this.http.get<any>(`${this.pathBase}/${id}`);
  }

  deleteUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.pathBase}/${id}`);

  }

  
}
