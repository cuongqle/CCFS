import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map'
import {AbstractService} from "./base.service";
import {Login} from "../dtos/userDTOs";
import {LocalStorageService} from "angular-2-local-storage";

@Injectable()
export class AuthenticationService extends AbstractService {
  constructor(private http: HttpClient, localStorageService: LocalStorageService) {
    super(localStorageService);
  }

  login(login: Login) {
    return this.http.post<any>(`${this.baseURL}/api/authenticate`, login)
      .map(user => {
        if (user && user.token) {
          this.localStorageService.set('currentUser', JSON.stringify(user));
        }
        return user;
      });
  }

  logout() {
    this.localStorageService.remove('currentUser');
  }
}
