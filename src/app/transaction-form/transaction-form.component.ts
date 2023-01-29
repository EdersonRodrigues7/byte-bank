import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent {
  @Output () onTransact = new EventEmitter<any>();
  amount: number;
  destination: string;

  makeTransaction(){
    if(this.validate(this.amount, this.destination)){
      this.onTransact.emit({amount: this.amount, destination: this.destination});
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
