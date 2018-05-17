import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DebtorStatus, DebtorType} from "../../../../../dtos/debtorDTOs";
import {ToastrComponent} from "../../../toastr.component";
import {ToasterService} from "angular2-toaster";
import {DebtorService} from "../../../../../services/debtor.service";

@Component({
  templateUrl: 'create-debtor.component.html'
})
export class CreateDebtorComponent extends ToastrComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private debtorService: DebtorService, protected toasterService: ToasterService) {
    super(toasterService);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      primeContactName: [null, Validators.required],
      mobileNumber: [null],
      directorName: [null],
      debtorType: [DebtorType.Company],
      status: [DebtorStatus.Active]
    });
  }

  save() {
    if (this.form.valid) {
      this.debtorService.createDebtor(this.form.value).subscribe(
        data => { this.showSuccess('Debtor created'); },
        error => { this.showError('Error'); });
    }
  }
}
