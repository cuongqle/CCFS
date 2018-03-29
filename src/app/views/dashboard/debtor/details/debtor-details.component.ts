import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Debtor} from "../../../../dtos/debtorDTOs";

@Component({
  templateUrl: 'debtor-details.component.html'
})
export class DebtorDetailsComponent {
  debtor: Debtor;

  constructor(private activatedRouter: ActivatedRoute) {
    this.debtor = this.activatedRouter.snapshot.data['resolverGetDebtorById'];
  }
}
