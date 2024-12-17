import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-imoveis',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro-imoveis.component.html',
  styleUrl: './cadastro-imoveis.component.css'
})
export class CadastroImoveisComponent {

  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicializando o formulário com os campos necessários
    this.cadastroForm = this.fb.group({
      id: [null, Validators.required],
      endereco: ['', Validators.required],
      proprietarioId: [null, Validators.required],
      consumoMensal: [null, [Validators.required, Validators.min(0)]],
      status: ['ativo', Validators.required],
      dataCriacao: [new Date(), Validators.required],
      ultimoPagamento: [new Date(), Validators.required]
    });
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      console.log('Imóvel cadastrado:', this.cadastroForm.value);
      // Aqui você pode adicionar a lógica para enviar os dados ao servidor ou armazená-los
    } else {
      console.log('Formulário inválido');
    }
  }

}
