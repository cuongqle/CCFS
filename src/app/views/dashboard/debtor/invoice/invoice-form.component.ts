import {OnInit} from "@angular/core";
import {CcfsComponent} from "../../ccfs.component";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {DebtorService} from "../../../../services/debtor.service";
import {ToasterService} from "angular2-toaster";

export class InvoiceFormComponent extends CcfsComponent implements OnInit {
  form: FormGroup;

  constructor(protected activatedRouter: ActivatedRoute, protected formBuilder: FormBuilder,
              protected debtorService: DebtorService, protected toasterService: ToasterService) {
    super(toasterService);
  }

  ngOnInit() {
    this.createInvoiceForm();
  }

  protected createInvoiceForm() {}

  protected saveInvoice() {}

  save() {
    if (this.form.valid) {
      this.saveInvoice();
    }
  }
}
