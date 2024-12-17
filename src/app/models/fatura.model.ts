export interface Fatura {
    id: number;
    imovelId: number;       // Relacionamento com o imóvel
    valorTotal: number;      // Valor total da fatura
    dataVencimento: Date;
    status: 'pendente' | 'pago' | 'vencido';
    dataPagamento?: Date;    // Opcional, caso tenha sido paga
    metodoPagamento?: 'cartao' | 'pix' | 'boleto'; // Forma de pagamento
  }
  