import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {DebtorComponent} from "./debtor/debtor.component";
import {SettingComponent} from "./setting/setting.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TemplatesComponent} from "./templates/templates.component";
import {LettersComponent} from "./letters/letters.component";
import {CommonModule} from "@angular/common";
import {SelectModule} from "ng-select";
import {DebtorDetailsComponent} from "./debtor/details/debtor-details.component";
import {DebtorService} from "../../services/debtor.service";
import {GetDebtorListResolver} from "../../services/resolvers/debtor-list.resolver";
import {GetDebtorByIdResolver} from "../../services/resolvers/debtor-by-id.resolver";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    SelectModule
  ],
  declarations: [
    DashboardComponent,
    SettingComponent,
    DebtorComponent,
    DebtorDetailsComponent,
    TemplatesComponent,
    LettersComponent
  ],
  providers: [
    DebtorService,
    GetDebtorListResolver,
    GetDebtorByIdResolver
  ]
})
export class DashboardModule { }
