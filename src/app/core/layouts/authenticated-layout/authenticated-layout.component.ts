import { Component } from '@angular/core';
import { BarraNavegacaoComponent } from '../../../compartilhado/componentes/barra-navegacao/barra-navegacao.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticated-layout',
  templateUrl: './authenticated-layout.component.html',
  styleUrl: './authenticated-layout.component.scss',
  imports: [RouterOutlet,
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  BarraNavegacaoComponent],
})
export class AuthenticatedLayoutComponent {

  constructor(private router: Router) {}

  title = 'saae-sjsoter-frontend';

  getDate() : Date {
    return new Date();
  }

  logout(): void {
    // Remove o usuário do localStorage
    localStorage.removeItem('usuario');

    // Redireciona para a tela de login
    this.router.navigate(['/login']);
  }
}
