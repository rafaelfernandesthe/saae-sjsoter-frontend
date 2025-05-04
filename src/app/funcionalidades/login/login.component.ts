import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule, MatCardModule, MatFormFieldModule, MatButtonModule],
})
export class LoginComponent {
  usuario = '';
  senha = '';

  constructor(private router: Router) {}

  fazerLogin(): void {
    if (this.usuario === 'admin' && this.senha === '123456') {
      localStorage.setItem('usuario', JSON.stringify({ nome: 'admin', perfil: 'ADMIN' }));
      this.router.navigate(['/dashboard']);
    } else {
      alert('Usuário ou senha inválidos!');
    }
  }
}
