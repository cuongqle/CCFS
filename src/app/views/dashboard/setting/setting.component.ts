import {Component, OnInit} from '@angular/core';
import {User} from "../../../dtos/userDTOs";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {ToasterService} from "angular2-toaster";
import {CcfsComponent} from "../ccfs.component";

@Component({
  templateUrl: 'setting.component.html'
})
export class SettingComponent extends CcfsComponent implements OnInit  {
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
              private userService: UserService, protected toasterService: ToasterService) {
    super(toasterService);
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
    this.geoSettings = Object.assign({ inputString: this.user.userCompanyInfo.address }, this.geoSettings);
  }

  private setAddressValue($event: any) {
    const companyInfo: any = this.form.controls['userCompanyInfo'];
    companyInfo.controls['address'].setValue(null);
    if ($event.data) {
      companyInfo.controls['address'].setValue($event.data.description);
    }
  }

  onAddressChanged($event: any) {
    this.setAddressValue($event);
  }

  onLogoChanged($event: any) {
    if ($event.target.files.length > 0) {
      const formData: any = new FormData();
      const file = $event.target.files[0];
      formData.append('logo', file, file.name);
      this.userService.uploadLogo(formData).subscribe(
        (data: any) => {
          this.loading = false;
          this.user.userCompanyInfo.logo = data.url;
          this.showSuccess('Logo uploaded');
        },
        error => {
          this.loading = false;
          this.showError('Error in upload logo');
        }
      );
    }
  }

  save() {
    if (this.form.valid) {
      this.loading = true;
      const searchInput: any = document.getElementsByName('search');
      this.setAddressValue({ data: { description: searchInput[0].value }});
      this.userService.update(this.form.value).subscribe(
        data => {
          this.loading = false;
          this.showSuccess('User saved');
        },
        error => {
          this.loading = false;
          this.showError('Error');
        }
      );
    }
  }
}
