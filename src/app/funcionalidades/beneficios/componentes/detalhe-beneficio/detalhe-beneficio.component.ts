import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BeneficioApiService } from '../../../../compartilhado/servicos/beneficioapi.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms'; 
import { MatSelectModule } from '@angular/material/select';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalhe-beneficio',
  standalone: true,
  templateUrl: './detalhe-beneficio.component.html',
  styleUrls: ['./detalhe-beneficio.component.scss'],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule 
  ]
})
export class DetalheBeneficioComponent implements OnInit {
  beneficioForm: FormGroup;
  beneficioId: number | null = null;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private beneficioApiService: BeneficioApiService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.beneficioForm = this.fb.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      tipo: ['', Validators.required],
      descontoAplicado: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.beneficioId = id ? +id : null; // Verifica se existe o ID e converte para número

    if (this.beneficioId) {
      this.carregarBeneficio(this.beneficioId);
    }
  }

  carregarBeneficio(id: number): void {
    this.beneficioApiService.getBeneficioById(id).subscribe({
      next: (res) => {
        this.beneficioForm.patchValue(res);  // Preenche o formulário com os dados do benefício
      },
      error: () => {
        this.snackBar.open('Erro ao carregar benefício', 'Fechar', { duration: 3000 });
      }
    });
  }

  salvarBeneficio(): void {
    if (this.beneficioForm.valid) {
      const beneficioData = this.beneficioForm.value;
      if (this.beneficioId) {
        // Atualiza o benefício
        this.beneficioApiService.atualizarBeneficio({ ...beneficioData, id: this.beneficioId }).subscribe({
          next: () => {
            this.snackBar.open('Benefício atualizado com sucesso', 'Fechar', { duration: 3000 });
            this.router.navigate(['/beneficios']);
          },
          error: () => {
            this.snackBar.open('Erro ao atualizar benefício', 'Fechar', { duration: 3000 });
          }
        });
      } else {
        // Cria um novo benefício
        this.beneficioApiService.salvarBeneficio(beneficioData).subscribe({
          next: () => {
            this.snackBar.open('Benefício criado com sucesso', 'Fechar', { duration: 3000 });
            this.router.navigate(['/beneficios']);
          },
          error: () => {
            this.snackBar.open('Erro ao criar benefício', 'Fechar', { duration: 3000 });
          }
        });
      }
    } else {
      this.snackBar.open('Por favor, preencha todos os campos', 'Fechar', { duration: 3000 });
    }
  }

  cancelar(): void {
    this.router.navigate(['/beneficios']);
  }
}
