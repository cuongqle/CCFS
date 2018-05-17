import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Debtor} from "../../../../../dtos/debtorDTOs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  templateUrl: 'debtor-details.component.html'
})
export class DebtorDetailsComponent implements OnInit {
  debtor: Debtor;
  form: FormGroup;

  constructor(private activatedRouter: ActivatedRoute, private formBuilder: FormBuilder) {
    this.debtor = this.activatedRouter.snapshot.data['resolverGetDebtorById'];
  }

  ngOnInit() {
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

  save() {
    if (this.form.valid) {

    }
  }
}
