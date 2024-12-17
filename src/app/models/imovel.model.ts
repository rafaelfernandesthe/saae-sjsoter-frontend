export interface Imovel {
    id: number;
    endereco: string;
    proprietarioId: number;  // Relacionamento com o usuário (proprietário)
    consumoMensal: number;   // Consumo de água mensal em m³
    status: 'ativo' | 'inativo';
    dataCriacao: Date;
    ultimoPagamento: Date;
  }
  