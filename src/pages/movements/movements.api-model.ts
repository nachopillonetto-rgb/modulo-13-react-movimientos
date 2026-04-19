export interface AccountVm {
  id: string;
  alias: string;
  iban: string;
  balance: number;
  lastTransaction: string;
}

export interface MovementVm {
  id: string;
  accountId: string;
  transaction: string;
  realTransaction: string;
  description: string;
  amount: number;
  balance: number;
}
