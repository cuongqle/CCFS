import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  loading: boolean = false;
  returnUrl: string;

  form: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router,
              private authenticationService: AuthenticationService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.form.value)
      .subscribe(
        data => { this.router.navigate([this.returnUrl]) },
        error => {
          console.log(error);
          this.loading = false;
        }
      );
  }

  register() {
    this.router.navigate(['/register']);
  }
}
