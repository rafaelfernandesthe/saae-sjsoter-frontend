export interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha?: string;  // Somente no cadastro ou quando o usuário muda a senha
    tipo: 'admin' | 'proprietario' | 'atendente';
    dataCriacao: Date;
  }
  