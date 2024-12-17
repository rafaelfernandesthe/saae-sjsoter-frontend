import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from '../../../models/usuario.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css'
})
export class PerfilUsuarioComponent implements OnInit {
  perfilForm: FormGroup;
  usuario: Usuario;

  constructor(private fb: FormBuilder) {
    // Exemplo de usuário, simula um dado vindo de um serviço ou API
    this.usuario = {
      id: 1,
      nome: 'João da Silva',
      email: 'joao.silva@example.com',
      tipo: 'admin',
      dataCriacao: new Date('2020-01-01T10:00:00')
    };

    // Criando o formulário com campos para editar
    this.perfilForm = this.fb.group({
      nome: [this.usuario.nome, Validators.required],
      email: [this.usuario.email, [Validators.required, Validators.email]],
      senha: ['', Validators.minLength(6)],
      tipo: [this.usuario.tipo, Validators.required],
      dataCriacao: [{ value: this.usuario.dataCriacao, disabled: true }]
    });
  }

  ngOnInit(): void {
    // Aqui você pode carregar os dados do usuário via um serviço
  }

  onSubmit(): void {
    if (this.perfilForm.valid) {
      const updatedUser = this.perfilForm.value;
      console.log('Dados do usuário atualizados:', updatedUser);
      // Enviar para o backend ou serviço para atualizar o usuário
    } else {
      console.log('Formulário inválido');
    }
  }

  // Função para exibir ou ocultar o campo de senha
  get showPasswordField(): boolean {
    return this.perfilForm.get('senha')?.value !== '';
  }
}