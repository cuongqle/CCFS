import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AbstractService} from "./base.service";
import {User} from "../dtos/UserDTOs";
import {LocalStorageService} from "angular-2-local-storage";


@Injectable()
export class UserService extends AbstractService {
  constructor(private http: HttpClient, localStorageService: LocalStorageService) {
    super(localStorageService);
  }

  create(user: User) {
    return this.http.post(`${this.baseURL}/api/users`, user);
  }

  getById(id: number) {
    return this.http.get(`${this.baseURL}/api/users/` + id, {
      headers: {
        'Authorization': this.getAuthorization()
      }
    });
  }
}
