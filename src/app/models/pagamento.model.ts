export interface Pagamento {
    id: number;
    faturaId: number;        // Relacionamento com a fatura
    valorPago: number;       // Valor pago
    dataPagamento: Date;
    metodo: 'pix' | 'boleto' | 'cartao';
    status: 'concluido' | 'pendente';
  }
  