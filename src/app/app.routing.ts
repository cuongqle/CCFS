import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  LoginComponent,
  HomeComponent
} from './containers';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'login',
        loadChildren: './views/login/login.module#LoginModule'
      },
      {
        path: 'register',
        loadChildren: './views/register/register.module#RegisterModule'
      }
    ]
  },
  {
    path: 'dashboard',
    component: HomeComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
