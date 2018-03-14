import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map'
import {LoginDTO} from "../dtos/UserDTOs";
import {AbstractService} from "./base.service";

@Injectable()
export class AuthenticationService extends AbstractService {
  constructor(private http: HttpClient) {
    super();
  }

  login(login: LoginDTO) {
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
