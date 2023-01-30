import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactions: any[];

  constructor() {
    this.transactions = [];
  }

  public getTransactions(): any[]
  {
    return this.transactions;
  }

  public transact(transaction: any)
  {
    this.setTransactionDate(transaction);
    this.transactions.push(transaction);
  }

  private setTransactionDate(transaction: any)
  {
    transaction.date = new Date();
  }
}
