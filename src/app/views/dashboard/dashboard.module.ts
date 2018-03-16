import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {DebtorComponent} from "./debtor/debtor.component";
import {SettingComponent} from "./setting/setting.component";

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule
  ],
  declarations: [
    DashboardComponent,
    SettingComponent,
    DebtorComponent
  ]
})
export class DashboardModule { }
