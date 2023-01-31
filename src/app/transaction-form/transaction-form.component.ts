import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../models/transaction.model';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent {
  @Output () onTransact = new EventEmitter<Object>();
  amount: number;
  destination: string;
  transaction: Transaction;

  constructor(private service: TransactionService, private router: Router){}

  makeTransaction(){
    if(this.validate(this.amount, this.destination)){
      this.transaction = {amount: this.amount, destination: this.destination};
      this.service.setNewTransaction(this.transaction).subscribe({
        next: (transaction: Transaction) => {
          console.log(`Transaction successfully created! Amount: ${transaction.amount}`);
          this.clearForm();
          this.router.navigateByUrl('extract');
        },
        error: (err: any) => console.log(err),
        complete: () => console.log(`Transaction successfully created!`)
      });
    } else {
      alert("Please provide valid amount and destination");
    }
  }
  clearForm(){
    this.amount = 0;
    this.destination = '';
  }
  private validate(amount: number, destination: string){
    if(amount > 0 && destination.length === 6){
      return true;
    }
    return false;
  }
}
