import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-lista-beneficios',
  templateUrl: './lista-beneficios.component.html',
  styleUrls: ['./lista-beneficios.component.scss'],
  imports: [
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
})
export class ListaBeneficiosComponent {
  // Dados mockados de benefícios
  beneficios = [
    { nome: 'Desconto Estudante', descricao: 'Desconto para estudantes', tipo: 'percentual', desconto: '15%' },
    { nome: 'Desconto Idoso', descricao: 'Desconto para idosos acima de 60 anos', tipo: 'valor', desconto: 'R$ 50,00' },
    { nome: 'Desconto Família', descricao: 'Desconto para famílias com mais de 3 membros', tipo: 'percentual', desconto: '10%' },
  ];

  // Colunas exibidas na tabela
  displayedColumns: string[] = ['nome', 'descricao', 'tipo', 'desconto', 'acoes'];

  // Método para adicionar benefício
  adicionarBeneficio(): void {
    console.log('Adicionar benefício clicado');
    // Aqui você pode implementar a lógica para abrir um modal ou redirecionar para a página de cadastro
  }

  // Método para editar benefício
  editarBeneficio(beneficio: any): void {
    console.log('Editar benefício clicado para:', beneficio);
    // Aqui você pode implementar a lógica para abrir um modal ou redirecionar para a página de edição
  }

  // Método para excluir benefício
  excluirBeneficio(beneficio: any): void {
    const confirmacao = confirm(`Você deseja realmente excluir o benefício "${beneficio.nome}"?`);
    if (confirmacao) {
      console.log('Excluir benefício confirmado para:', beneficio);
      // Aqui você pode implementar a lógica para excluir o benefício
    }
  }
}
