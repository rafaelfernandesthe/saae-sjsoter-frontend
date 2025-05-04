import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { FormatacaoService } from '../../../../compartilhado/servicos/formatacao.service';

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

  constructor(private http: HttpClient, protected formatacaoService: FormatacaoService) {}

  ngOnInit(): void {
    this.carregarImoveis(0, 10);
  }

  carregarImoveis(pagina: number, tamanho: number): void {
    const params = {
      ...this.filtros,
      page: pagina.toString(),
      size: tamanho.toString(),
    };

    this.http.get<any>('/castlemock/mock/rest/project/k7HONY/application/Qg7XPB/imoveis', { params }).subscribe((res) => {
      this.imoveis = res;
      this.totalRegistros = res.length; 
    });
  }

  aplicarFiltros(): void {
    console.log('Filtros aplicados:', this.filtros);
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
    console.log('Adicionar imóvel clicado');
  }

  atualizarCadastro(imovel: any): void {
    console.log('Atualizar cadastro clicado para o imóvel:', imovel);
  }
}