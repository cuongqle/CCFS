import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import {DebtorComponent} from "./debtor/debtor.component";
import {SettingComponent} from "./setting/setting.component";
import {GetLoggedUserResolver} from "../../services/resolvers/logged-user.resolver";
import {TemplatesComponent} from "./templates/templates.component";
import {LettersComponent} from "./letters/letters.component";
import {DebtorDetailsComponent} from "./debtor/details/edit/debtor-details.component";
import {GetDebtorListResolver} from "../../services/resolvers/debtor-list.resolver";
import {GetDebtorByIdResolver} from "../../services/resolvers/debtor-by-id.resolver";
import {GetDebtorInvoiceByIdResolver} from "../../services/resolvers/invoice-by-id.resolver";
import {EditInvoiceComponent} from "./debtor/invoice/edit/edit-invoice.component";
import {GetTemplateListResolver} from "../../services/resolvers/template-list.resolver";
import {CreateInvoiceComponent} from "./debtor/invoice/create/create-invoice.component";
import {CreateDebtorComponent} from "./debtor/details/create/create-debtor.component";

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
    component: DebtorComponent,
    resolve: {
      resolverGetDebtorList: GetDebtorListResolver
    }
  },
  {
    path: 'create/debtor',
    component: CreateDebtorComponent
  },
  {
    path: 'debtor/:id',
    component: DebtorDetailsComponent,
    resolve: {
      resolverGetDebtorById: GetDebtorByIdResolver
    }
  },
  {
    path: 'create/invoice',
    component: CreateInvoiceComponent
  },
  {
    path: 'invoice/:id',
    component: EditInvoiceComponent,
    resolve: {
      resolverGetDebtorInvoiceById: GetDebtorInvoiceByIdResolver
    }
  },
  {
    path: 'templates',
    component: TemplatesComponent,
    resolve: {
      resolverGetTemplateList: GetTemplateListResolver
    }
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
