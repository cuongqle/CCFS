import {CcfsComponent} from "../../ccfs.component";
import {OnInit} from "@angular/core";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {DebtorService} from "../../../../services/debtor.service";
import {ToasterService} from "angular2-toaster";
import {ActivatedRoute} from "@angular/router";
import {AddressType} from "../../../../dtos/debtorDTOs";

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

  private onAddressChanged($event: any, addressType: number) {
    let addresses = this.form.controls['addresses'];
    if (!addresses) {
      addresses = this.formBuilder.array([]);
    }
    const values = addresses.value;
    const address = values.find(a => a.addressType === addressType);
    if (address) {
      address.address = $event.data ? $event.data.description : null;
    } else {
      (<FormArray>addresses).push(this.formBuilder.group({
        addressType: [addressType],
        address: [$event.data ? $event.data.description : null]
      }));
    }
    this.form.controls['addresses'] = addresses;
  }

  onBillAddressChanged($event: any) {
    this.onAddressChanged($event, AddressType.BillingAddress);
  }

  onServiceAddressChanged($event: any) {
    this.onAddressChanged($event, AddressType.ServiceAddress);
  }

  save() {
    if (this.form.valid) {
      this.saveDebtor();
    }
  }
}
