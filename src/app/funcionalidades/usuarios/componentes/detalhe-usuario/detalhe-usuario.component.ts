import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

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
export class DetalheUsuarioComponent {
  usuario: any = {
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
    permissao: '',
    status: 'Ativo'
  };

  permissoes: string[] = ['ADMIN', 'SAAE', 'PREFEITURA'];

  constructor(private router: Router) {}

  salvar(): void {
    console.log('Usuário salvo:', this.usuario);
    this.router.navigate(['/usuarios']);
  }

  cancelar(): void {
    this.router.navigate(['/usuarios']);
  }

  
}
