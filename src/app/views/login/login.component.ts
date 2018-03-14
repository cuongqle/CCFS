import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading: boolean = false;
  returnUrl: string;

  constructor(private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model)
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
