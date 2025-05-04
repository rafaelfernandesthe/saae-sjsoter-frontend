import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormatacaoService } from '../../../../compartilhado/servicos/formatacao.service';

@Component({
  selector: 'app-lista-ordens',
  templateUrl: './lista-ordens.component.html',
  styleUrls: ['./lista-ordens.component.scss'],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
})
export class ListaOrdensComponent {

  constructor(protected formatacaoService: FormatacaoService) { }

  // Dados mockados de ordens de serviço
  ordens = [
    {
      imovel: 'CASA - Rua das Flores, 123',
      proprietario: 'João Silva',
      cpfCnpj: '12345678900',
      referencia: '04/2025',
      vencimento: new Date(2025, 3, 30),
      diasAtraso: 10,
      valor: 150.75,
      status: 'Pendente',
    },
    {
      imovel: 'TERRENO - Rua das Palmeiras, 456',
      proprietario: 'Maria Oliveira',
      cpfCnpj: '98765432100',
      referencia: '04/2025',
      vencimento: new Date(2025, 3, 25),
      diasAtraso: 15,
      valor: 200.0,
      status: 'Cortado',
    },
    {
      imovel: 'PONTO COMERCIAL - Avenida Brasil, 789',
      proprietario: 'Carlos Santos',
      cpfCnpj: '45678912300',
      referencia: '03/2025',
      vencimento: new Date(2025, 2, 20),
      diasAtraso: 40,
      valor: 300.5,
      status: 'Baixa por Pagamento',
    },
  ];

  // Colunas exibidas na tabela
  displayedColumns: string[] = ['imovel', 'proprietario', 'cpfCnpj', 'referencia', 'vencimento', 'diasAtraso', 'valor', 'status', 'acoes'];

  // Método para obter a classe CSS do status
  getStatusClass(status: string): string {
    switch (status) {
      case 'Pendente':
        return 'status-pendente';
      case 'Cortado':
        return 'status-cortado';
      case 'Baixa por Pagamento':
        return 'status-baixa-pagamento';
      default:
        return '';
    }
  }

  // Métodos para ações
  downloadPdf(ordem: any): void {
    console.log('Download PDF clicado para a ordem:', ordem);
    // Implementar lógica para download do PDF
  }

  confirmarCorte(ordem: any): void {
    console.log('Confirmar corte clicado para a ordem:', ordem);
    // Implementar lógica para confirmar corte
  }

  darBaixaPagamento(ordem: any): void {
    console.log('Dar baixa por pagamento clicado para a ordem:', ordem);
    // Implementar lógica para dar baixa por pagamento
  }

  reagendar(ordem: any): void {
    console.log('Reagendar clicado para a ordem:', ordem);
    // Implementar lógica para reagendar
  }
}
