import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  model: any = {};

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  register() {
    this.userService.create(this.model)
      .subscribe(
        data => { this.router.navigate(['/login']) },
        error => { console.log(error) });
  }

  onCancel() {
    this.router.navigate(['/login']);
  }
}
