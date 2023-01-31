import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from '@angular/router';

import { ExtractComponent } from './extract/extract.component';
import { TransactionFormComponent } from "./transaction-form/transaction-form.component";

export const routes: Routes = [
  {path: '', redirectTo: 'extract', pathMatch: 'full'},
  {path: 'extract', component: ExtractComponent},
  {path: 'new-transaction', component: TransactionFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
