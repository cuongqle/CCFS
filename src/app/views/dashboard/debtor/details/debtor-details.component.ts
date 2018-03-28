import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  templateUrl: 'debtor-details.component.html'
})
export class DebtorDetailsComponent {
  constructor(private activatedRouter: ActivatedRoute) {
    this.debtor = this.activatedRouter.snapshot.data['resolverGetDebtorById'];
  }
}
