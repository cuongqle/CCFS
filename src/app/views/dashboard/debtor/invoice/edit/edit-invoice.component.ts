import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DebtorInvoice} from "../../../../../dtos/debtorDTOs";
import {FormBuilder, Validators} from "@angular/forms";
import {DebtorService} from "../../../../../services/debtor.service";
import {ToasterService} from "angular2-toaster";
import {InvoiceFormComponent} from "../invoice-form.component";

@Component({
  templateUrl: 'edit-invoice.component.html'
})
export class EditInvoiceComponent extends InvoiceFormComponent {
  invoice: DebtorInvoice;

  constructor(protected activatedRouter: ActivatedRoute, protected formBuilder: FormBuilder,
              protected debtorService: DebtorService, protected toasterService: ToasterService) {
    super(activatedRouter, formBuilder, debtorService, toasterService);

    this.invoice = this.activatedRouter.snapshot.data['resolverGetDebtorInvoiceById'];
  }

  protected createInvoiceForm() {
    this.form = this.formBuilder.group({
      debtorId: [this.invoice.debtorId, Validators.required],
      invoiceNumber: [this.invoice.invoiceNumber, Validators.required],
      invoiceDate: [this.invoice.invoiceDate, Validators.required],
      invoiceAmount: [this.invoice.invoiceAmount, Validators.required],
      outstandingAmount: [this.invoice.outstandingAmount, Validators.required]
    });
  }

  saveInvoice() {
    this.debtorService.updateDebtorInvoice(this.form.value).subscribe(
      data => { this.showSuccess('Debtor invoice saved'); },
      error => { this.showError('Error'); });
  }
}
