import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AbstractService} from "./base.service";
import {User} from "../dtos/UserDTOs";


@Injectable()
export class UserService extends AbstractService {
  constructor(private http: HttpClient) {
    super();
  }

  create(user: User) {
    return this.http.post(`${this.baseURL}/api/users`, user);
  }
}
