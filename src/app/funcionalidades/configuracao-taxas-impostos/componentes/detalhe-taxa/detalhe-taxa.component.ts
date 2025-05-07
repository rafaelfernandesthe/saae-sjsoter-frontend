import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { TaxaImpostoApiService } from '../../../../compartilhado/servicos/taxaimpostoapi.service';

@Component({
  selector: 'app-detalhe-taxa',
  templateUrl: './detalhe-taxa.component.html',
  styleUrls: ['./detalhe-taxa.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class DetalheTaxaComponent implements OnInit {
  taxa: any = {
    nome: '',
    descricao: '',
    tipo: '',
    valor: ''
  };

  modoEdicao = false;
  tipos: string[] = ['PERCENTUAL', 'VALOR'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taxaApi: TaxaImpostoApiService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && Number(id) > 0) {
      this.modoEdicao = true;
      this.carregarTaxa(Number(id));
    }
  }

  carregarTaxa(id: number): void {
    this.taxaApi.buscarPorId(id).subscribe({
      next: (res) => {
        this.taxa = res;
      },
      error: (err) => console.error('Erro ao carregar taxa', err)
    });
  }

  salvar(): void {
    if (this.modoEdicao) {
      this.taxaApi.atualizar(this.taxa).subscribe({
        next: () => {
          alert('Taxa atualizada com sucesso.');
          this.router.navigate(['/configuracao-taxas-impostos']);
        },
        error: (err) => console.error('Erro ao atualizar taxa', err)
      });
    } else {
      this.taxaApi.salvar(this.taxa).subscribe({
        next: () => {
          alert('Taxa salva com sucesso.');
          this.router.navigate(['/configuracao-taxas-impostos']);
        },
        error: (err) => console.error('Erro ao salvar taxa', err)
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/configuracao-taxas-impostos']);
  }
}
