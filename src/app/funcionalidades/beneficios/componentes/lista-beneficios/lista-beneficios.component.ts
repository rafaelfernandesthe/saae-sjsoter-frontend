import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { BeneficioApiService } from '../../../../compartilhado/servicos/beneficioapi.service';

@Component({
  selector: 'app-lista-beneficios',
  standalone: true,
  templateUrl: './lista-beneficios.component.html',
  styleUrls: ['./lista-beneficios.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ListaBeneficiosComponent implements OnInit, AfterViewInit {
  beneficios = new MatTableDataSource<any>([]);  // Usando 'any' para dados sem modelo
  displayedColumns: string[] = ['nome', 'descricao', 'tipo', 'desconto', 'acoes'];
  totalRegistros = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private beneficioApiService: BeneficioApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarBeneficios();  // Carregar benefícios diretamente
  }

  ngAfterViewInit(): void {
    this.beneficios.paginator = this.paginator;  // Atribui paginator ao MatTableDataSource
    this.beneficios.sort = this.sort;  // Atribui o MatSort ao MatTableDataSource
  }

  carregarBeneficios(): void {
    this.beneficioApiService.listar().subscribe({
      next: (res) => {
        if (res.content) {
          this.beneficios.data = res.content;  // Atualiza a lista de benefícios
          this.totalRegistros = res.totalElements;  // Atualiza o total de registros
        }
      },
      error: (error) => {
        console.error('Erro ao carregar benefícios:', error);  // Exibe o erro no console
      }
    });
  }

  adicionarBeneficio(): void {
    this.router.navigate(['beneficios/novo']);
  }

  editarBeneficio(beneficio: any): void {
    this.router.navigate(['beneficios/editar', beneficio.id]);
  }

  excluirBeneficio(beneficio: any): void {
    if (confirm(`Tem certeza que deseja excluir o benefício "${beneficio.nome}"?`)) {
      this.beneficioApiService.excluir(beneficio.id).subscribe({
        next: () => {
          console.log('Benefício excluído com sucesso');
          this.carregarBeneficios(); // Recarregar a lista de benefícios após exclusão
        },
        error: (error) => {
          console.error('Erro ao excluir benefício:', error);
        }
      });
    }
  }
}
