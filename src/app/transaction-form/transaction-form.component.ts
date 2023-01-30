import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent {
  @Output () onTransact = new EventEmitter<Object>();
  amount: number;
  destination: string;
  transaction: Object;

  makeTransaction(){
    if(this.validate(this.amount, this.destination)){
      this.transaction = {amount: this.amount, destination: this.destination};
      this.onTransact.emit(this.transaction);
      this.clearForm();
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
