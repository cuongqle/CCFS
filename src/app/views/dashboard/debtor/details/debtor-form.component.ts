import {CcfsComponent} from "../../ccfs.component";
import {OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {DebtorService} from "../../../../services/debtor.service";
import {ToasterService} from "angular2-toaster";
import {ActivatedRoute} from "@angular/router";

export class DebtorFormComponent extends CcfsComponent implements OnInit {
  form: FormGroup;

  constructor(protected activatedRouter: ActivatedRoute, protected formBuilder: FormBuilder, protected debtorService: DebtorService, protected toasterService: ToasterService) {
    super(toasterService);
  }

  ngOnInit() {
    this.createDebtorForm();
  }

  protected createDebtorForm() {}

  protected saveDebtor() {}

  onBillAddressChanged($event: any) {
  }

  onServiceAddressChanged($event: any) {
  }

  save() {
    if (this.form.valid) {
      this.saveDebtor();
    }
  }
}
