import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormatacaoService } from '../../../../compartilhado/servicos/formatacao.service';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-lista-contas',
  templateUrl: './lista-contas.component.html',
  styleUrls: ['./lista-contas.component.scss'],
  imports: [
    FormsModule,
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule
  ],
})
export class ListaContasComponent {

  constructor(protected formatacaoService: FormatacaoService) { }

  totalRegistros = 0;
  // Dados mockados de contas
  contas = [
    {
      imovel: 'CASA - Rua das Flores, 123',
      proprietario: 'João Silva',
      cpfCnpj: '12345678900',
      referencia: '04/2025',
      vencimento: new Date(2025, 3, 30),
      valor: 150.75,
      status: 'Pago',
    },
    {
      imovel: 'TERRENO - Rua das Palmeiras, 456',
      proprietario: 'Maria Oliveira',
      cpfCnpj: '98765432100',
      referencia: '04/2025',
      vencimento: new Date(2025, 3, 25),
      valor: 200.0,
      status: 'Pendente',
    },
    {
      imovel: 'PONTO COMERCIAL - Avenida Brasil, 789',
      proprietario: 'Carlos Santos',
      cpfCnpj: '45678912300',
      referencia: '03/2025',
      vencimento: new Date(2025, 2, 20),
      valor: 300.5,
      status: 'Vencido',
    },
  ];

  // Filtros
  filtros = {
    imovel: '',
    proprietario: '',
    cpfCnpj: '',
    referencia: '',
    status: '',
  };

  // Opções de status
  statusOpcoes = ['Pago', 'Pendente', 'Vencido'];

  // Colunas exibidas na tabela
  displayedColumns: string[] = ['imovel', 'proprietario', 'cpfCnpj', 'referencia', 'vencimento', 'valor', 'status', 'acoes'];

  // Método para aplicar filtros
  aplicarFiltros(): void {
    console.log('Filtros aplicados:', this.filtros);
    // Aqui você pode implementar a lógica para buscar os dados filtrados do backend
  }

  limparFiltros(): void {
    this.filtros = {
      imovel: '',
      proprietario: '',
      cpfCnpj: '',
      referencia: '',
      status: '',
    };
    console.log('Filtros limpos');
    this.aplicarFiltros(); // Recarrega os dados sem filtros
  }

  carregarPagina(event: any): void {
    console.log('Página carregada:', event);
    // Lógica para carregar a página de dados
  }

  // Método para gerar nova conta
  gerarNovaConta(): void {
    console.log('Gerar nova conta clicado');
    // Aqui você pode implementar a lógica para abrir um modal ou redirecionar para a página de geração de conta
  }

  // Método para baixar o PDF
  downloadPdf(conta: any): void {
    console.log('Download PDF clicado para a conta:', conta);
    // Aqui você pode implementar a lógica para baixar o PDF da conta
  }

  // Método para obter a classe CSS do status
  getStatusClass(status: string): string {
    switch (status) {
      case 'Pago':
        return 'status-pago';
      case 'Pendente':
        return 'status-pendente';
      case 'Vencido':
        return 'status-vencido';
      default:
        return '';
    }
  }
}