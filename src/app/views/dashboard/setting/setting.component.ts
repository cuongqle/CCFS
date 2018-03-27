import {Component, OnInit} from '@angular/core';
import {User} from "../../../dtos/userDTOs";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";

@Component({
  templateUrl: 'setting.component.html'
})
export class SettingComponent implements OnInit  {
  user: User;
  form: FormGroup;
  loading: boolean = false;

  accountTypes: any[] = [
    { id: 1, name: "Basic" },
    { id: 2, name: "Premium" }
  ];

  frequences: any[] = [
    { id: 1, name: "Monthly" },
    { id: 2, name: "Annually" }
  ];

  constructor(private activatedRouter: ActivatedRoute, private formBuilder: FormBuilder,
              private userService: UserService) {
    this.user = this.activatedRouter.snapshot.data['resolverGetLoggedUser'];
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      userID: [this.user.userID],
      firstName: [this.user.firstName],
      lastName: [this.user.lastName],
      userCompanyInfo: this.formBuilder.group({
        id: [this.user.userCompanyInfo.id],
        companyName: [this.user.userCompanyInfo.companyName, [Validators.required]],
        taxNumber: [this.user.userCompanyInfo.taxNumber, [Validators.required]],
        address: [this.user.userCompanyInfo.address, [Validators.required]],
        accountType: [this.user.userCompanyInfo.accountType, [Validators.required]],
        frequence: [this.user.userCompanyInfo.frequence, [Validators.required]],
        email: [this.user.userCompanyInfo.email, [Validators.required]],
        phoneNumber: [this.user.userCompanyInfo.phoneNumber, [Validators.required]],
        website: [this.user.userCompanyInfo.website, [Validators.required]],
        bankInfo: [this.user.userCompanyInfo.bankInfo, [Validators.required]]
      })
    });
  }

  save() {
    if (this.form.valid) {
      this.loading = true;
      this.userService.update(this.form.value).subscribe((result: any) => {
        this.loading = false;
      });
    }
  }
}
