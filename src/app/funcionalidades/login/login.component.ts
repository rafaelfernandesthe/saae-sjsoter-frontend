import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from '../../core/autenticacao/auth.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule, MatCardModule, MatFormFieldModule, MatButtonModule],
  providers: [AuthService]
})
export class LoginComponent {
  email = '';
  senha = '';

  constructor(private router: Router, private authService: AuthService) {}

  fazerLogin(): void {
    this.authService.login(this.email, this.senha).subscribe({
      next: (res: any) => {
        const token = res.token || res;
        const payload: any = jwtDecode(token);
        const usuario = payload.sub;
        const nome = payload.nome;
        const perfil = payload.perfil;

        localStorage.setItem('usuario', JSON.stringify({ usuario, nome, perfil, token }));
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        alert('Usuário ou senha inválidos!');
      }
    });
  }
}
