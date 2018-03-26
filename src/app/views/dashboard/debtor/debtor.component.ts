import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Debtor, DebtorInvoice} from "../../../dtos/debtorDTOs";

@Component({
  templateUrl: 'debtor.component.html'
})
export class DebtorComponent {
  debtors: Debtor[];
  debtorInvoices: DebtorInvoice[];

  constructor(private activatedRouter: ActivatedRoute) {
    this.debtors = this.activatedRouter.snapshot.data['resolverGetDebtorList'];
  }

  openDetails(debtor: Debtor) {
    this.debtorInvoices = debtor.invoices;
  }
}
