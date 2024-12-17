import { Component } from '@angular/core';
import { Imovel } from '../../../models/imovel.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-imoveis',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-imoveis.component.html',
  styleUrl: './lista-imoveis.component.css'
})
export class ListaImoveisComponent {
  imoveis: Imovel[] = [
    {
      id: 1,
      endereco: 'Rua A, 123',
      proprietarioId: 101,
      consumoMensal: 15,
      status: 'ativo',
      dataCriacao: new Date('2023-01-10'),
      ultimoPagamento: new Date('2023-12-01'),
    },
    {
      id: 2,
      endereco: 'Rua B, 456',
      proprietarioId: 102,
      consumoMensal: 25,
      status: 'inativo',
      dataCriacao: new Date('2022-05-22'),
      ultimoPagamento: new Date('2023-10-01'),
    },
    {
      id: 3,
      endereco: 'Rua C, 789',
      proprietarioId: 103,
      consumoMensal: 20,
      status: 'ativo',
      dataCriacao: new Date('2021-11-15'),
      ultimoPagamento: new Date('2023-11-20'),
    }
  ];

}
