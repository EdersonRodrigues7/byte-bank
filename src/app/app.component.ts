import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'byte-bank';
  transactions: Object[] = [];

  transact($event){
    const transaction = {...$event, date: new Date()};
    this.transactions.push(transaction);
  }
}
