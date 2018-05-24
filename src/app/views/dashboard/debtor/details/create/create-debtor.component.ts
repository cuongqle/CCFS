import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AddressType, DebtorStatus, DebtorType} from "../../../../../dtos/debtorDTOs";
import {ToasterService} from "angular2-toaster";
import {DebtorService} from "../../../../../services/debtor.service";
import {DebtorFormComponent} from "../debtor-form.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  templateUrl: 'create-debtor.component.html'
})
export class CreateDebtorComponent extends DebtorFormComponent {
  form: FormGroup;

  constructor(protected activatedRouter: ActivatedRoute, protected formBuilder: FormBuilder, protected debtorService: DebtorService, protected toasterService: ToasterService) {
    super(activatedRouter, formBuilder, debtorService, toasterService);
  }

  protected createDebtorForm() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      primeContactName: [null, Validators.required],
      mobileNumber: [null],
      directorName: [null],
      debtorType: [DebtorType.Company],
      status: [DebtorStatus.Active],
      addresses: this.formBuilder.array(
        Array(2).fill({}).map((c, i) => {
            return this.formBuilder.group({
              addressType: [i === 0 ? AddressType.BillingAddress : AddressType.ServiceAddress],
              address: ['New Zealand'],
              city: [null],
              postcode: [null]
            })
          }
        )
      )
    });

    const addresses: any = this.form.controls.addresses;
    this.geoSettings1 = Object.assign({ inputString: addresses.controls[0].value.address }, this.geoSettings);
    this.geoSettings2 = Object.assign({ inputString: addresses.controls[1].value.address }, this.geoSettings);
  }

  saveDebtor() {
    this.debtorService.createDebtor(this.form.value).subscribe(
      data => { this.showSuccess('Debtor created'); },
      error => { this.showError('Error'); });
  }
}
