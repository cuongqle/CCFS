import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Debtor} from "../../../../dtos/debtorDTOs";
import {FormBuilder} from "@angular/forms";

@Component({
  templateUrl: 'debtor-details.component.html'
})
export class DebtorDetailsComponent implements OnInit {
  debtor: Debtor;

  constructor(private activatedRouter: ActivatedRoute, private formBuilder: FormBuilder) {
    this.debtor = this.activatedRouter.snapshot.data['resolverGetDebtorById'];
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
    });
  }

  save() {

  }
}
