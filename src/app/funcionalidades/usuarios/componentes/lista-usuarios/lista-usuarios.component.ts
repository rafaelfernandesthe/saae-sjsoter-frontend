import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormatacaoService } from '../../../../compartilhado/servicos/formatacao.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss'],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule]
  })
export class ListaUsuariosComponent {

  constructor(protected formatacaoService: FormatacaoService) { }

  // Dados mockados de usuários
  usuarios = [
    { nome: 'João Silva', cpf: '12345678901', telefone: '99987654322', email: 'email1@exemplo.com', status: 'Ativo', ultimoLogin: new Date(), permissao: 'ADMIN' },
    { nome: 'Maria Oliveira', cpf: '98765432100', telefone: '99912345678', email: 'email2@exemplo.com',status: 'Inativo', ultimoLogin: new Date(), permissao: 'SAAE' },
    { nome: 'Carlos Santos', cpf: '45678912300', telefone: '99998765432', email: 'email3@exemplo.com',status: 'Ativo', ultimoLogin: new Date(), permissao: 'PREFEITURA' },
  ];

  // Colunas exibidas na tabela
  displayedColumns: string[] = ['nome', 'cpf', 'telefone', 'email', 'status', 'ultimoLogin', 'permissao', 'acoes'];

  adicionarUsuario(): void {
    console.log('Adicionar usuário clicado');
    // Aqui você pode implementar a lógica para abrir um modal ou redirecionar para a página de cadastro
  }

  // Método para confirmar ações
  confirmarAcao(acao: string, usuario: any): void {
    const confirmacao = confirm(`Você deseja realmente ${acao} o usuário ${usuario.nome}?`);
    if (confirmacao) {
      console.log(`Ação "${acao}" confirmada para o usuário:`, usuario);
      // Aqui você pode implementar a lógica para realizar a ação
    }
  }
}
