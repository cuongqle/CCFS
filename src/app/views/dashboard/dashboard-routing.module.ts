import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import {DebtorComponent} from "./debtor/debtor.component";
import {SettingComponent} from "./setting/setting.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'setting',
    component: SettingComponent
  },
  {
    path: 'debtor',
    component: DebtorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
