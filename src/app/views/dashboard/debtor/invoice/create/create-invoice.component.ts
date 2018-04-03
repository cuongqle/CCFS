import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  templateUrl: 'create-invoice.component.html'
})
export class CreateInvoiceComponent {
  constructor(private activatedRouter: ActivatedRoute) {
  }
}
