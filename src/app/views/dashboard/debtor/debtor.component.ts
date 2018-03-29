import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Debtor, DebtorInvoice} from "../../../dtos/debtorDTOs";

@Component({
  templateUrl: 'debtor.component.html'
})
export class DebtorComponent {
  debtors: Debtor[];
  selectedDebtor: Debtor;
  debtorInvoices: DebtorInvoice[];

  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
    this.debtors = this.activatedRouter.snapshot.data['resolverGetDebtorList'];
  }

  showInvoices(debtor: Debtor) {
    this.selectedDebtor = debtor;
    this.debtorInvoices = debtor.invoices;
  }

  openDebtorDetails(debtor: Debtor) {
    this.router.navigate(['dashboard/debtor/' + debtor.id]);
  }

  openDebtorInvoiceDetails(invoice: DebtorInvoice) {
    this.router.navigate(['dashboard/invoice/' + invoice.id]);
  }
}
