import {Component} from '@angular/core';
import {Address, AddressType, Debtor} from "../../../../../dtos/debtorDTOs";
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

  geoSettings1: any
  geoSettings2: any

  constructor(protected activatedRouter: ActivatedRoute, protected formBuilder: FormBuilder, protected debtorService: DebtorService, protected toasterService: ToasterService) {
    super(activatedRouter, formBuilder, debtorService, toasterService);

    this.debtor = this.activatedRouter.snapshot.data['resolverGetDebtorById'];
  }

  private buildAddressesForm(address: Address) {
    return this.formBuilder.group({
      addressType: [address.addressType],
      address: [address.address],
      city: [address.city],
      postcode: [address.postcode]
    });
  }

  protected createDebtorForm() {
    this.form = this.formBuilder.group({
      id: [this.debtor.id],
      name: [this.debtor.name, Validators.required],
      email: [this.debtor.email, Validators.required],
      primeContactName: [this.debtor.primeContactName, Validators.required],
      mobileNumber: [this.debtor.mobileNumber],
      directorName: [this.debtor.directorName],
      debtorType: [this.debtor.debtorType],
      status: [this.debtor.status],
      addresses: this.formBuilder.array(this.debtor.addresses.map(a => this.buildAddressesForm(a)))
    });

    this.geoSettings1 = Object.assign({ inputString: this.debtor.addresses[0].address }, this.geoSettings);
    this.geoSettings2 = Object.assign({ inputString: this.debtor.addresses[1].address }, this.geoSettings);
  }

  saveDebtor() {
    this.debtorService.updateDebtor(this.form.value).subscribe(
      data => { this.showSuccess('Debtor saved'); },
      error => { this.showError('Error'); });
  }
}
