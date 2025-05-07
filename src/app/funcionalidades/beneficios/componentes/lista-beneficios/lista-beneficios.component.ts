import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BeneficioApiService } from '../../../../compartilhado/servicos/beneficioapi.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';

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
    MatCardModule
  ]
})
export class ListaBeneficiosComponent implements OnInit {
  beneficios: any[] = [];
  totalRegistros: number = 0;
  displayedColumns: string[] = ['nome', 'descricao', 'tipo', 'desconto', 'acoes'];
  params: any = { page: 0, size: 10 };

  constructor(
    private http: HttpClient,
    private beneficioApiService: BeneficioApiService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarBeneficios();
  }

  carregarBeneficios(): void {
    this.beneficioApiService.getBeneficios(this.params).subscribe({
      next: (res) => {
        this.beneficios = res.content;
        this.totalRegistros = res.totalElements;
      },
      error: () => {
        this.snackBar.open('Erro ao carregar benefícios', 'Fechar', { duration: 3000 });
      }
    });
  }

  // Método para adicionar benefício
  adicionarBeneficio(): void {
    this.router.navigate(['/beneficios/novo']);
  }

  // Método para editar benefício
  editarBeneficio(beneficio: any): void {
    this.router.navigate([`/beneficios/editar/${beneficio.id}`]);
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
