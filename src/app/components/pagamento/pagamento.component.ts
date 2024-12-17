import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pagamento } from '../../models/pagamento.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagamento',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pagamento.component.html',
  styleUrl: './pagamento.component.css'
})
export class PagamentoComponent {
  pagamentoForm: FormGroup;
  pagamentos: Pagamento[] = [];

  constructor(private fb: FormBuilder) {
    this.pagamentoForm = this.fb.group({
      id: [null, Validators.required],
      faturaId: [null, Validators.required],
      valorPago: [null, [Validators.required, Validators.min(0)]],
      dataPagamento: [new Date(), Validators.required],
      metodo: ['pix', Validators.required],
      status: ['pendente', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.pagamentoForm.valid) {
      const novoPagamento = this.pagamentoForm.value as Pagamento;
      this.pagamentos.push(novoPagamento);
      console.log('Pagamento registrado:', novoPagamento);
      this.pagamentoForm.reset();
    } else {
      console.log('Formulário inválido');
    }
  }

}
