import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormatacaoService } from '../../../../compartilhado/servicos/formatacao.service';
import { Router } from '@angular/router';
import { UsuariosApiService } from '../../../../compartilhado/servicos/usuariosapi.service';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
    MatButtonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ]
  })
export class ListaUsuariosComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(protected formatacaoService: FormatacaoService, private router: Router, private usuariosApiService: UsuariosApiService) { }

  usuarios: any[] = [];
  totalRegistros = 0;
  carregando = false;
  filtros = {
    nome: ''
  };
  // Colunas exibidas na tabela
  displayedColumns: string[] = ['nome', 'cpf', 'telefone', 'email', 'status', 'ultimoLogin', 'permissao', 'acoes'];

  ngOnInit(): void {
    this.carregarUsuarios(0, 10);
  }

  carregarUsuarios(pagina: number, tamanho: number): void {
    const params = {
      ...this.filtros,
      page: pagina.toString(),
      size: tamanho.toString(),
      sort: 'id,asc'
    };

    this.carregando = true;
    this.usuariosApiService.getUsuarios(params).subscribe({
      next: (res) => {
        this.usuarios = res.content;
        this.totalRegistros = res.totalElements;
      },
      error: (error) => {
        console.error('Erro ao carregar usuarios', error);
      },
      complete: () => {
        this.carregando = false;
      }
    });
  }

  aplicarFiltros(): void {
    this.carregarUsuarios(0, 10);
    if (this.paginator) {
      this.paginator.firstPage();
    }
  }

  limparFiltros(): void {
    this.filtros = {
      nome: ''
    };
   
    this.aplicarFiltros();
  }

  carregarPagina(event: PageEvent): void {
    this.carregarUsuarios(event.pageIndex, event.pageSize);
  }

  adicionarUsuario(): void {
    console.log('Adicionar usuário clicado');
    this.router.navigate(['usuarios/novo']);
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
