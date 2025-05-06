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
  modoEdicao = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    public formatacaoService: FormatacaoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.modoEdicao = true;
      this.carregarImovel(id);
    }
  }

  carregarImovel(id: string): void {
    this.http.get<any>(`/castlemock/mock/rest/project/k7HONY/application/Qg7XPB/imoveis/${id}`)
      .subscribe((res) => {
        this.imovel = res;
      });
  }

  salvarImovel(): void {
    if (this.modoEdicao && this.imovel.id) {
      // Atualizar imóvel existente
      this.http.put<any>(`/api/imoveis/${this.imovel.id}`, this.imovel).subscribe(
        () => this.router.navigate(['/imoveis']),
        (error) => console.error('Erro ao atualizar imóvel', error)
      );
    } else {
      // Criar novo imóvel
      this.http.post<any>('/api/imoveis', this.imovel).subscribe(
        () => this.router.navigate(['/imoveis']),
        (error) => console.error('Erro ao criar imóvel', error)
      );
    }
  }

  voltar(): void {
    this.router.navigate(['/imoveis']);
  }

  formatarCpfCnpj(cpfCnpj: string): string {
    return this.formatacaoService.formatarCpfCnpj(cpfCnpj);
  }

  formatarTelefone(telefone: string): string {
    return this.formatacaoService.formatarTelefone(telefone);
  }
}
