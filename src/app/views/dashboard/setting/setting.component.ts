import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../../../services/user.service";
import {User} from "../../../dtos/userDTOs";

@Component({
  templateUrl: 'setting.component.html'
})
export class SettingComponent implements OnInit  {
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getLoggedUser().subscribe((result: User) => {
      this.user = result;
    });
  }
}
