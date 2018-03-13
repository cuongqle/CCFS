import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map'
import {LoginDTO} from "../dtos/UserDTOs";

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) { }
  login(login: LoginDTO) {
    return this.http.post<any>('/api/authenticate', login)
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
