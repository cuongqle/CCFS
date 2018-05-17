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
import {DebtorDetailsComponent} from "./debtor/details/edit/debtor-details.component";
import {DebtorService} from "../../services/debtor.service";
import {GetDebtorListResolver} from "../../services/resolvers/debtor-list.resolver";
import {GetDebtorByIdResolver} from "../../services/resolvers/debtor-by-id.resolver";
import {GetDebtorInvoiceByIdResolver} from "../../services/resolvers/invoice-by-id.resolver";
import {EditInvoiceComponent} from "./debtor/invoice/edit/edit-invoice.component";
import {TemplateService} from "../../services/template.service";
import {GetTemplateListResolver} from "../../services/resolvers/template-list.resolver";
import {CreateInvoiceComponent} from "./debtor/invoice/create/create-invoice.component";
import {CreateDebtorComponent} from "./debtor/details/create/create-debtor.component";
import {ToasterModule} from "angular2-toaster";

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    SelectModule,
    ToasterModule
  ],
  declarations: [
    DashboardComponent,
    SettingComponent,
    DebtorComponent,
    CreateDebtorComponent,
    DebtorDetailsComponent,
    CreateInvoiceComponent,
    EditInvoiceComponent,
    TemplatesComponent,
    LettersComponent
  ],
  providers: [
    DebtorService,
    GetDebtorListResolver,
    GetDebtorByIdResolver,
    GetDebtorInvoiceByIdResolver,
    TemplateService,
    GetTemplateListResolver
  ]
})
export class DashboardModule { }
