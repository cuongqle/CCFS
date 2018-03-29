import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DebtorInvoice} from "../../../../dtos/debtorDTOs";

@Component({
  templateUrl: 'invoice.component.html'
})
export class InvoiceComponent {
  invoice: DebtorInvoice;

  constructor(private activatedRouter: ActivatedRoute) {
    this.invoice = this.activatedRouter.snapshot.data['resolverGetDebtorInvoiceById'];
  }
}
