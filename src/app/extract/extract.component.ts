import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {
  transactions: Object[];

  constructor(private service: TransactionService){}

  ngOnInit(){
    this.service.getTransactionsFromDb().subscribe((transactions: Transaction[]) => {
      this.transactions = transactions;
    });
  }
}
