import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormatacaoService } from '../../../../compartilhado/servicos/formatacao.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ImoveisApiService } from '../../../../compartilhado/servicos/imoveisapi.service';

@Component({
  selector: 'app-detalhe-imovel',
  templateUrl: './detalhe-imovel.component.html',
  styleUrls: ['./detalhe-imovel.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class DetalheImovelComponent implements OnInit {
  imovel: any = {
    tipo: '',
    rua: '',
    numero: '',
    bairro: '',
    nome: '',
    cpf_cnpj: '',
    descricao: ''
  };

  tipos = ['CASA', 'PONTO_COMERCIAL', 'IGREJA', 'TERRENO', 'POSTO_DE_COMBUSTIVEL'];
  modoEdicao = false

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    public formatacaoService: FormatacaoService,
    private imoveisApiService: ImoveisApiService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && Number(id) > 0) {
      this.modoEdicao = true;
      this.carregarImovel(id);
    }
  }

  carregarImovel(id: string): void {
    this.imoveisApiService.getImoveisById(Number(id)).subscribe({
      next: (res) => {
        this.imovel = res;
      },
      error: (error) => console.error('Erro ao carregar imóvel', error)
    });
  }

  salvarImovel(): void {
    if (this.modoEdicao && this.imovel.id) {
      this.imoveisApiService.atualizarImovel(this.imovel).subscribe({
        next: (res) => {
          alert("Imóvel atualizado com sucesso.");
          this.router.navigate(['/imoveis']);
        },
        error: (error) => console.error('Erro ao atualizar imóvel', error)
      });
    } else {
      this.imoveisApiService.salvarImoveis(this.imovel).subscribe({
        next: (res) => {
          alert("Imóvel Salvo com sucesso.");
          this.router.navigate(['/imoveis'])
        },
        error: (error) => console.error('Erro ao salvar imóvel', error)
      });
    }
  }

  voltar(): void {
    this.router.navigate(['/imoveis']);
  }

}
