import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'byte-bank';
  transaction: any;

  transact($event){
    this.transaction = {amount: $event.amount, destination: $event.destination}
  }
}
