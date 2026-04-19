export interface AccountVm {
  id: string;
  alias: string;
  iban: string;
  balance: number;
  lastTransaction: string;
}

export interface MovementVm {
  id: string;
  accountId: number;
  description: string;
  amount: number;
  balance: number;
  transaction: string;
  realTransaction: string;
}
