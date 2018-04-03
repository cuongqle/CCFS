import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DebtorInvoice} from "../../../../../dtos/debtorDTOs";

@Component({
  templateUrl: 'edit-invoice.component.html'
})
export class EditInvoiceComponent {
  invoice: DebtorInvoice;

  constructor(private activatedRouter: ActivatedRoute) {
    this.invoice = this.activatedRouter.snapshot.data['resolverGetDebtorInvoiceById'];
  }
}
