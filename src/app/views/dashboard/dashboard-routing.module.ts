import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import {DebtorComponent} from "./debtor/debtor.component";
import {SettingComponent} from "./setting/setting.component";
import {GetLoggedUserResolver} from "../../services/resolvers/logged-user.resolver";
import {TemplatesComponent} from "./templates/templates.component";
import {LettersComponent} from "./letters/letters.component";
import {DebtorDetailsComponent} from "./debtor/details/debtor-details.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'setting',
    component: SettingComponent,
    resolve: {
      resolverGetLoggedUser: GetLoggedUserResolver
    }
  },
  {
    path: 'debtor',
    component: DebtorComponent
  },
  {
    path: 'debtor/:id',
    component: DebtorDetailsComponent
  },
  {
    path: 'templates',
    component: TemplatesComponent
  },
  {
    path: 'letters',
    component: LettersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
