import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Debtor} from "../../../../../dtos/debtorDTOs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DebtorService} from "../../../../../services/debtor.service";
import {ToasterService} from "angular2-toaster";
import {ToastrComponent} from "../../../toastr.component";

@Component({
  templateUrl: 'debtor-details.component.html'
})
export class DebtorDetailsComponent extends ToastrComponent implements OnInit {
  debtor: Debtor;
  form: FormGroup;

  constructor(private activatedRouter: ActivatedRoute, private formBuilder: FormBuilder, private debtorService: DebtorService, protected toasterService: ToasterService) {
    super(toasterService);
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
      this.debtorService.updateDebtor(this.form.value).subscribe(
        data => { this.showSuccess('Debtor saved'); },
        error => { this.showError('Error'); });
    }
  }
}
