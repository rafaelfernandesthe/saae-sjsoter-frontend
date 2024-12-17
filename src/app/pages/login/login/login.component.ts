// src/app/pages/login/login.component.ts
import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private AuthService: AuthService, private router: Router) { }

  onLogin(): void {
    const isAuthenticated = this.AuthService.login(this.username, this.password);

    if (isAuthenticated) {
      this.router.navigate(['/dashboard']); // Redireciona para o dashboard após login bem-sucedido
    } else {
      this.errorMessage = 'Credenciais inválidas. Tente novamente.';
    }
  }
}
