import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserDTO} from "../dtos/userDTOs";
import {AbstractService} from "./base.service";


@Injectable()
export class UserService extends AbstractService {
  constructor(private http: HttpClient) {
    super();
  }

  create(user: UserDTO) {
    return this.http.post(`${this.baseURL}/api/users`, user);
  }
}
