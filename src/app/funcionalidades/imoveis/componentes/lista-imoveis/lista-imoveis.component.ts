import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { FormatacaoService } from '../../../../compartilhado/servicos/formatacao.service';
import { ImoveisApiService } from '../../../../compartilhado/servicos/imoveisapi.service';

@Component({
  selector: 'app-lista-imoveis',
  templateUrl: './lista-imoveis.component.html',
  styleUrls: ['./lista-imoveis.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressSpinnerModule],
})
export class ListaImoveisComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  imoveis: any[] = [];
  totalRegistros = 0;
  carregando = false;
  filtros = {
    tipo: '',
    rua: '',
    numero: '',
    bairro: '',
    proprietario: '',
    cpfCnpj: '',
  };
  tipos = ['CASA', 'PONTO_COMERCIAL', 'IGREJA', 'TERRENO', 'POSTO_DE_COMBUSTIVEL'];
  displayedColumns: string[] = ['tipo', 'rua', 'numero', 'bairro', 'proprietario', 'cpfCnpj', 'descricao', 'acoes'];

  constructor(protected formatacaoService: FormatacaoService, protected imoveisApiService: ImoveisApiService, private router: Router) {}

  ngOnInit(): void {
    this.carregarImoveis(0, 10);
  }

  carregarImoveis(pagina: number, tamanho: number): void {
    const params = {
      ...this.filtros,
      page: pagina.toString(),
      size: tamanho.toString(),
      sort: 'id,asc'
    };

    this.carregando = true;
    this.imoveisApiService.getImoveis(params).subscribe({
      next: (res) => {
        this.imoveis = res.content;
        this.totalRegistros = res.totalElements;
      },
      error: (error) => {
        console.error('Erro ao carregar imóveis', error);
      },
      complete: () => {
        this.carregando = false;
      }
    });
  }

  aplicarFiltros(): void {
    this.carregarImoveis(0, 10);
    if (this.paginator) {
      this.paginator.firstPage();
    }
  }

  limparFiltros(): void {
    this.filtros = {
      tipo: '',
      rua: '',
      numero: '',
      bairro: '',
      proprietario: '',
      cpfCnpj: '',
    };
   
    this.aplicarFiltros();
  }

  carregarPagina(event: PageEvent): void {
    this.carregarImoveis(event.pageIndex, event.pageSize);
  }

  adicionarImovel(): void {
    this.router.navigate(['imoveis/novo']);
    console.log('Adicionar imóvel clicado');
  }

  atualizarCadastro(imovel: any): void {
    this.router.navigate(['imoveis/' + imovel.id]);
  }
}