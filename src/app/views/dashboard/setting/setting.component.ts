import {Component, OnInit} from '@angular/core';
import {User} from "../../../dtos/userDTOs";
import {ActivatedRoute} from "@angular/router";

@Component({
  templateUrl: 'setting.component.html'
})
export class SettingComponent implements OnInit  {
  user: User;

  constructor(private activatedRouter: ActivatedRoute) {
    this.user = this.activatedRouter.snapshot.data['resolverGetLoggedUser'];
  }

  ngOnInit() {
  }
}
