import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {InvoiceFormComponent} from "../invoice-form.component";
import {FormBuilder, Validators} from "@angular/forms";
import {DebtorService} from "../../../../../services/debtor.service";
import {ToasterService} from "angular2-toaster";

@Component({
  templateUrl: 'create-invoice.component.html'
})
export class CreateInvoiceComponent extends InvoiceFormComponent {
  constructor(protected activatedRouter: ActivatedRoute, protected formBuilder: FormBuilder,
              protected debtorService: DebtorService, protected toasterService: ToasterService) {
    super(activatedRouter, formBuilder, debtorService, toasterService);
  }

  protected createInvoiceForm() {
    this.form = this.formBuilder.group({
      debtorId: [null, Validators.required],
      invoiceNumber: [null, Validators.required],
      invoiceDate: [null, Validators.required],
      invoiceAmount: [null, Validators.required],
      outstandingAmount: [null, Validators.required]
    });
  }

  saveInvoice() {
    this.debtorService.createDebtorInvoice(this.form.value).subscribe(
      data => { this.showSuccess('Debtor invoice created'); },
      error => { this.showError('Error'); });
  }
}
