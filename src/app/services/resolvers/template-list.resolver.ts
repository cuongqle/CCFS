import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {TemplateService} from "../template.service";

@Injectable()
export class GetTemplateListResolver implements Resolve<any> {
  constructor(private templateService: TemplateService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.templateService.getTemplateList();
  }
}
