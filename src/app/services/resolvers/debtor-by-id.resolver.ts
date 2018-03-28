import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Rx';

import {DebtorService} from "../debtor.service";

@Injectable()
export class GetDebtorByIdResolver implements Resolve<any> {
  constructor(private debtorService: DebtorService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.debtorService.getDebtorById(route.params['id']);
  }
}
