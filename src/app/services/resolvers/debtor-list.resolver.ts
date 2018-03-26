import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {DebtorService} from "../debtor.service";

@Injectable()
export class GetDebtorListResolver implements Resolve<any> {
  constructor(private debtorService: DebtorService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.debtorService.getDebtorList();
  }
}
