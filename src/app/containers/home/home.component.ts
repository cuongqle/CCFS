import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../../dtos/userDTOs";

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  loggedUser: User;

  constructor(private activatedRouter: ActivatedRoute) {
    this.loggedUser = this.activatedRouter.snapshot.data['resolverGetLoggedUser'];
  }
}
