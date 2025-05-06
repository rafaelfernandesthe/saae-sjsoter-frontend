import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BackendApiService } from '../../../../compartilhado/servicos/backendapi.service';
import { FormatacaoService } from '../../../../compartilhado/servicos/formatacao.service';
import { Router } from '@angular/router';

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
    MatButtonModule],
})
export class ListaImoveisComponent {
  imoveis: any[] = [];
  totalRegistros = 0;
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

  constructor(protected formatacaoService: FormatacaoService, protected backendApiService: BackendApiService,private router: Router) {}

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

    this.backendApiService.getImoveis(params).subscribe((res) => {
      this.imoveis = res.content;
      this.totalRegistros = res.totalElements; 
    });

  }

  aplicarFiltros(): void {
    this.carregarImoveis(0, 10);
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
    console.log('Filtros limpos');
    this.aplicarFiltros(); // Recarrega os dados sem filtros
  }

  carregarPagina(event: PageEvent): void {
    this.carregarImoveis(event.pageIndex, event.pageSize);
  }

  adicionarImovel(): void {
    this.router.navigate(['imoveis/novo']);
    console.log('Adicionar imóvel clicado');
  }

  atualizarCadastro(imovel: any): void {
    console.log('Atualizar cadastro clicado para o imóvel:', imovel);
  }
}