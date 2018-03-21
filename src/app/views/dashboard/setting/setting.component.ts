import {Component, OnInit} from '@angular/core';
import {User} from "../../../dtos/userDTOs";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  templateUrl: 'setting.component.html'
})
export class SettingComponent implements OnInit  {
  user: User;
  form: FormGroup;

  constructor(private activatedRouter: ActivatedRoute, private formBuilder: FormBuilder) {
    this.user = this.activatedRouter.snapshot.data['resolverGetLoggedUser'];
  }

  ngOnInit() {
    this.form = this.formBuilder.group({

    });
  }
}
