import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DebtorStatus, DebtorType} from "../../../../../dtos/debtorDTOs";

@Component({
  templateUrl: 'create-debtor.component.html'
})
export class CreateDebtorComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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

    }
  }
}
