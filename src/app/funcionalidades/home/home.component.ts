import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  nome = '';

  constructor() {
    const usuario = JSON.parse(localStorage.getItem('usuario#saae-sjsoter') || '{}');
    this.nome = usuario.nome;
  }
}
