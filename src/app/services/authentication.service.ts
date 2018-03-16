import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map'
import {AbstractService} from "./base.service";
import {Login} from "../dtos/UserDTOs";

@Injectable()
export class AuthenticationService extends AbstractService {
  constructor(private http: HttpClient) {
    super();
  }

  login(login: Login) {
    return this.http.post<any>(`${this.baseURL}/api/authenticate`, login)
      .map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
