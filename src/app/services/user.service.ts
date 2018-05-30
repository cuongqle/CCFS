import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AbstractService} from "./base.service";
import {Register, User} from "../dtos/userDTOs";
import {LocalStorageService} from "angular-2-local-storage";

@Injectable()
export class UserService extends AbstractService {
  constructor(private http: HttpClient, localStorageService: LocalStorageService) {
    super(localStorageService);
  }

  getLoggedUser() {
    return this.http.get(`${this.baseURL}/api/user`, {
      headers: {
        'Authorization': this.getAuthorization()
      }
    });
  }

  create(user: Register) {
    return this.http.post(`${this.baseURL}/api/user`, user);
  }

  update(user: User) {
    return this.http.put(`${this.baseURL}/api/user`, user, {
      headers: {
        'Authorization': this.getAuthorization()
      }
    });
  }

  uploadLogo(file: any) {
    return this.http.post(`${this.baseURL}/api/upload/logo`, file, {
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
