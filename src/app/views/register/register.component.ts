import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router, private userService: UserService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  register() {
    this.userService.create(this.form.value)
      .subscribe(
        data => { this.router.navigate(['/login']) },
        error => { console.log(error) });
  }

  onCancel() {
    this.router.navigate(['/login']);
  }
}
