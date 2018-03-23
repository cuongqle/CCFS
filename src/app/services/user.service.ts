import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AbstractService} from "./base.service";
import {Register} from "../dtos/userDTOs";
import {LocalStorageService} from "angular-2-local-storage";

@Injectable()
export class UserService extends AbstractService {
  constructor(private http: HttpClient, localStorageService: LocalStorageService) {
    super(localStorageService);
  }

  create(user: Register) {
    return this.http.post(`${this.baseURL}/api/user`, user);
  }

  getLoggedUser() {
    return this.http.get(`${this.baseURL}/api/user`, {
      headers: {
        'Authorization': this.getAuthorization()
      }
    });
  }

  getById(id: number) {
    return this.http.get(`${this.baseURL}/api/user/` + id, {
      headers: {
        'Authorization': this.getAuthorization()
      }
    });
  }
}
