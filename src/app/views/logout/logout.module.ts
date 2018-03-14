import { NgModule } from '@angular/core';

import {LogoutComponent} from './logout.component';
import {LogoutRoutingModule} from './logout-routing.module';
import {CommonModule} from "@angular/common";
import {AuthenticationService} from "../../services/authentication.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    LogoutRoutingModule,
    HttpClientModule
  ],
  declarations: [ LogoutComponent ],
  providers: [
    AuthenticationService
  ]
})
export class LogoutModule { }
