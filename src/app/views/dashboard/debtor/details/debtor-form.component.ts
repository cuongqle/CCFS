import {CcfsComponent} from "../../ccfs.component";
import {OnInit} from "@angular/core";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {DebtorService} from "../../../../services/debtor.service";
import {ToasterService} from "angular2-toaster";
import {ActivatedRoute} from "@angular/router";
import {AddressType} from "../../../../dtos/debtorDTOs";

export class DebtorFormComponent extends CcfsComponent implements OnInit {
  form: FormGroup;

  geoCitySettings1: any = Object.assign({ geoTypes: ['(cities)'] }, this.geoSettings);
  geoCitySettings2: any = Object.assign({ geoTypes: ['(cities)'] }, this.geoSettings);

  constructor(protected activatedRouter: ActivatedRoute, protected formBuilder: FormBuilder,
              protected debtorService: DebtorService, protected toasterService: ToasterService) {
    super(toasterService);
  }

  ngOnInit() {
    this.createDebtorForm();
  }

  protected createDebtorForm() {}

  protected saveDebtor() {}

  private setAddressValue($event: any, addressType: number) {
    const addresses = this.form.controls['addresses'];
    const values = addresses.value;
    const address = values.find(a => a.addressType === addressType);
    let postcode = address.postcode, city = address.city;
    if ($event.data && $event.data.address_components) {
      let ac = $event.data.address_components.find((a) => { return a.types[0] === 'postal_code' });
      if (ac) {
        postcode = ac.short_name;
      }
      ac = $event.data.address_components.find((a) => { return a.types[0] === 'locality' &&  a.types[1] === 'political' });
      if (ac) {
        city = ac.short_name;
      }
    }

    address.address = $event.data ? $event.data.description : null;
    address.city = city;
    address.postcode = postcode;
    if (addressType === AddressType.BillingAddress) {
      this.geoCitySettings1 = Object.assign({ inputString: city }, this.geoCitySettings1);
    } else {
      this.geoCitySettings2 = Object.assign({ inputString: city }, this.geoCitySettings2);
    }

    this.form.controls['addresses'].setValue(addresses.value);
  }

  private setCityValue($event: any, addressType: number) {
    const addresses: any = this.form.controls['addresses'];
    const values: any = addresses.value;
    const address: any = values.find(a => a.addressType === addressType);
    let city = address.city;
    if ($event.data && $event.data.address_components) {
      const ac = $event.data.address_components.find((a) => { return a.types[0] === 'locality' &&  a.types[1] === 'political' });
      if (ac) {
        city = ac.short_name;
        const geoCitySettings: any = Object.assign({ geoTypes: ['(cities)'] }, this.geoSettings);
        if (addressType === AddressType.BillingAddress) {
          this.geoCitySettings1 = Object.assign({ inputString: city }, geoCitySettings);
        } else {
          this.geoCitySettings2 = Object.assign({ inputString: city }, geoCitySettings);
        }
      }
    }
    address.city = city;
    this.form.controls['addresses'].setValue(addresses.value);
  }

  onBillAddressChanged($event: any) {
    this.setAddressValue($event, AddressType.BillingAddress);
  }

  onBillCityAddressChanged($event: any) {
    this.setCityValue($event, AddressType.BillingAddress);
  }

  onServiceAddressChanged($event: any) {
    this.setAddressValue($event, AddressType.ServiceAddress);
  }

  onServiceCityAddressChanged($event: any) {
    this.setCityValue($event, AddressType.ServiceAddress);
  }

  save() {
    if (this.form.valid) {
      const searchInputs: any = document.getElementsByName('search');
      this.setAddressValue({ data: { description: searchInputs[0].value }}, AddressType.BillingAddress);
      this.setAddressValue({ data: { description: searchInputs[1].value }}, AddressType.ServiceAddress);
      this.saveDebtor();
    }
  }
}
