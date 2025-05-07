import { Component, OnInit, ViewChild } from '@angular/core';

import { BeneficioApiService } from '../../../../compartilhado/servicos/beneficioapi.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Router, RouterModule } from '@angular/router';
import { MatSort, MatSortModule } from '@angular/material/sort';


@Component({
  selector: 'app-lista-beneficios',
  standalone: true,
  templateUrl: './lista-beneficios.component.html',
  styleUrls: ['./lista-beneficios.component.scss'],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule
  ]
  
})
export class ListaBeneficiosComponent implements OnInit {

  beneficios = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['nome', 'descricao', 'tipo', 'desconto', 'acoes'];
  totalRegistros = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private beneficioApiService: BeneficioApiService, private router: Router) {}

  ngOnInit(): void {
    this.carregarBeneficios(0, 10);
  }

  carregarBeneficios(pageIndex: number, pageSize: number): void {
    const params = {
      page: pageIndex.toString(),
      size: pageSize.toString(),
      sort: 'nome,asc'
    };

    this.beneficioApiService.getBeneficios(params).subscribe({
      next: (res) => {
        this.beneficios.data = res.content;
        this.totalRegistros = res.totalElements;
        this.beneficios.paginator = this.paginator;
        this.beneficios.sort = this.sort;
      },
      error: (error) => {
        console.error('Erro ao carregar benefícios', error);
      }
    });
  }

  // Método para adicionar um novo benefício
  adicionarBeneficio(): void {
    this.router.navigate(['beneficios/novo']);  // Redireciona para a página de adicionar benefício
  }

  // Método para editar um benefício existente
  editarBeneficio(beneficio: any): void {
    this.router.navigate(['beneficios/editar', beneficio.id]);  // Redireciona para a página de editar benefício
  }

  // Método para excluir um benefício
  excluirBeneficio(beneficio: any): void {
    if (confirm('Tem certeza que deseja excluir este benefício?')) {
      this.beneficioApiService.deleteBeneficio(beneficio.id).subscribe(
        () => {
          console.log('Benefício excluído com sucesso');
          this.carregarBeneficios(0, 10);  // Recarrega a lista após a exclusão
        },
        (error) => {
          console.error('Erro ao excluir benefício', error);
        }
      );
    }
  }
}
