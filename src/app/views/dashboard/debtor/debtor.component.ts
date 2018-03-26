import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Debtor} from "../../../dtos/debtorDTOs";

@Component({
  templateUrl: 'debtor.component.html'
})
export class DebtorComponent {
  debtors: Debtor[];

  constructor(private activatedRouter: ActivatedRoute) {
    this.debtors = this.activatedRouter.snapshot.data['resolverGetDebtorList'];
  }

  openDetails(debtor: any) {

  }
}
