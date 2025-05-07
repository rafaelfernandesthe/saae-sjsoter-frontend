import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaxaImpostoApiService } from '../../../../compartilhado/servicos/taxaimpostoapi.service';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-lista-taxas',
  templateUrl: './lista-taxas.component.html',
  styleUrls: ['./lista-taxas.component.scss'],
  imports: [MatTableModule, MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule],
})
export class ListaTaxasComponent implements OnInit {
  taxas: any[] = [];
  displayedColumns: string[] = ['nome', 'descricao', 'tipo', 'valor', 'acoes'];

  constructor(
    private router: Router,
    private taxaService: TaxaImpostoApiService
  ) {}

  ngOnInit(): void {
    this.listarTaxas();
  }

  // Método para listar as taxas
  listarTaxas(): void {
    this.taxaService.listar().subscribe({
      next: (res) => {
        this.taxas = res;
      },
      error: (err) => console.error('Erro ao listar taxas:', err),
    });
  }

  // Método para adicionar taxa
  adicionarTaxa(): void {
    this.router.navigate(['/configuracao-taxas-impostos/novo']);
  }

  // Método para editar taxa
  editarTaxa(taxa: any): void {
    this.router.navigate([`/configuracao-taxas-impostos/editar/${taxa.id}`]);
  }

  // Método para excluir taxa
  excluirTaxa(taxa: any): void {
    const confirmacao = confirm(`Você deseja realmente excluir a taxa "${taxa.nome}"?`);
    if (confirmacao) {
      this.taxaService.excluir(taxa.id).subscribe({
        next: () => {
          alert('Taxa excluída com sucesso!');
          this.listarTaxas(); // Recarregar a lista após exclusão
        },
        error: (err) => console.error('Erro ao excluir taxa:', err),
      });
    }
  }
}
