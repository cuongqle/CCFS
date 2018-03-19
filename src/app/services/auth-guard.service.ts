import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {LocalStorageService} from "angular-2-local-storage";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private localStorageService: LocalStorageService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.localStorageService.get('currentUser')) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
