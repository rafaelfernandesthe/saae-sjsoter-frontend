import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-lista-taxas',
  templateUrl: './lista-taxas.component.html',
  styleUrls: ['./lista-taxas.component.scss'],
  imports: [MatTableModule, MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule],

})
export class ListaTaxasComponent {
  // Dados mockados de taxas
  taxas = [
    { nome: 'Taxa de Água', descricao: 'Cobrança mensal de água', tipo: 'valor', valor: 'R$ 50,00' },
    { nome: 'Imposto Predial', descricao: 'Imposto sobre propriedades', tipo: 'percentual', valor: '2%' },
    { nome: 'Taxa de Lixo', descricao: 'Cobrança pelo serviço de coleta de lixo', tipo: 'valor', valor: 'R$ 30,00' },
  ];

  // Colunas exibidas na tabela
  displayedColumns: string[] = ['nome', 'descricao', 'tipo', 'valor', 'acoes'];

  // Método para adicionar taxa
  adicionarTaxa(): void {
    console.log('Adicionar taxa clicado');
    // Aqui você pode implementar a lógica para abrir um modal ou redirecionar para a página de cadastro
  }

  // Método para editar taxa
  editarTaxa(taxa: any): void {
    console.log('Editar taxa clicado para:', taxa);
    // Aqui você pode implementar a lógica para abrir um modal ou redirecionar para a página de edição
  }

  // Método para excluir taxa
  excluirTaxa(taxa: any): void {
    const confirmacao = confirm(`Você deseja realmente excluir a taxa "${taxa.nome}"?`);
    if (confirmacao) {
      console.log('Excluir taxa confirmado para:', taxa);
      // Aqui você pode implementar a lógica para excluir a taxa
    }
  }
}
