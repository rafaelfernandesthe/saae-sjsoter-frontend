import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatacaoService {

  constructor() { }

  // Método para formatar CPF ou CNPJ
  formatarCpfCnpj(cpfCnpj: string): string {
    if (cpfCnpj?.length === 11) {
      return cpfCnpj.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (cpfCnpj?.length === 14) {
      return cpfCnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
    return cpfCnpj; // Retorna o valor original caso não tenha 11 ou 14 dígitos
  }

  formatarTelefone(phone: string): string {
    if (phone?.length === 11) {
      return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } 

    return phone; // Retorna o valor original caso não tenha 11 
  }
  
}
