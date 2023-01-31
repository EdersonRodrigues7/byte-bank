import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactions: Transaction[];
  private url = 'http://localhost:3000/transactions';

  constructor(private httpClient: HttpClient) {
    this.transactions = [];
  }

  public getTransactions(): Transaction[]
  {
    return this.transactions;
  }

  public getTransactionsFromDb(): Observable<Transaction[]>
  {
    return this.httpClient.get<Transaction[]>(this.url);
  }

  public setNewTransaction(transaction: Transaction): Observable<Transaction>
  {
    this.setTransactionDate(transaction);
    return this.httpClient.post<Transaction>(this.url, transaction);
  }

  private setTransactionDate(transaction: any)
  {
    transaction.date = new Date();
  }
}
