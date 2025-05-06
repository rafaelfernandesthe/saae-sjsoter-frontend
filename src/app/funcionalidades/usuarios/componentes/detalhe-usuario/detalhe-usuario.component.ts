import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosApiService } from '../../../../compartilhado/servicos/usuariosapi.service';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class DetalheUsuarioComponent implements OnInit {
  usuario: any = {
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
    permissao: '',
    status: 'Ativo'
  };

  modoEdicao = false;
  permissoes: string[] = ['ADMIN', 'SAAE', 'PREFEITURA', 'COMUM'];

  constructor(private route: ActivatedRoute, private router: Router, private usuariosApiService: UsuariosApiService) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && Number(id) > 0) {
      this.modoEdicao = true;
      this.carregarUsuario(id);
    }
  }

  carregarUsuario(id: string): void {
    this.usuariosApiService.getUsuariosById(Number(id)).subscribe({
      next: (res) => {
        this.usuario = res;
      },
      error: (error) => console.error('Erro ao carregar usuario', error)
    });
  }
  

  salvar(): void {
    if (this.usuario.id && this.usuario.id > 0) {
      this.usuariosApiService.atualizarUsuario(this.usuario).subscribe({
        next: (res) => {
          alert("Usuario atualizado com sucesso.");
          this.router.navigate(['/usuarios']);
        },
        error: (error) => console.error('Erro ao atualizar usuario', error)
      });
    } else {
      this.usuariosApiService.salvarUsuarios(this.usuario).subscribe({
        next: (res) => {
          alert("Usuario Salvo com sucesso.");
          this.router.navigate(['/usuarios'])
        },
        error: (error) => console.error('Erro ao salvar usuário', error)
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/usuarios']);
  }

  
}
