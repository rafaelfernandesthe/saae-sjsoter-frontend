import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-barra-navegacao',
  templateUrl: './barra-navegacao.component.html',
  styleUrls: ['./barra-navegacao.component.scss'],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule, 
  ],
})
export class BarraNavegacaoComponent {
  
  isAuthorized(allowedProfiles: string[]): boolean {
    const usuario = JSON.parse(localStorage.getItem('usuario#saae-sjsoter') || '{}');
    return allowedProfiles.includes(usuario.perfil);
  }
  
}
