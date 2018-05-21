import {Component} from '@angular/core';
import {AddressType, Debtor} from "../../../../../dtos/debtorDTOs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DebtorService} from "../../../../../services/debtor.service";
import {ToasterService} from "angular2-toaster";
import {DebtorFormComponent} from "../debtor-form.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  templateUrl: 'debtor-details.component.html'
})
export class DebtorDetailsComponent extends DebtorFormComponent {
  debtor: Debtor;
  form: FormGroup;

  constructor(protected activatedRouter: ActivatedRoute, protected formBuilder: FormBuilder, protected debtorService: DebtorService, protected toasterService: ToasterService) {
    super(activatedRouter, formBuilder, debtorService, toasterService);

    this.debtor = this.activatedRouter.snapshot.data['resolverGetDebtorById'];
  }

  protected createDebtorForm() {
    if (!this.debtor.addresses) {
      this.debtor.addresses = Array(2).fill({});
    }
    this.form = this.formBuilder.group({
      id: [this.debtor.id],
      name: [this.debtor.name, Validators.required],
      email: [this.debtor.email, Validators.required],
      primeContactName: [this.debtor.primeContactName, Validators.required],
      mobileNumber: [this.debtor.mobileNumber],
      directorName: [this.debtor.directorName],
      debtorType: [this.debtor.debtorType],
      status: [this.debtor.status]
    });
  }

  saveDebtor() {
    this.debtorService.updateDebtor(this.form.value).subscribe(
      data => { this.showSuccess('Debtor saved'); },
      error => { this.showError('Error'); });
  }
}
