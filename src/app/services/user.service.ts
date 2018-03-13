import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserDTO} from "../dtos/UserDTOs";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  create(user: UserDTO) {
    return this.http.post('/api/users', user);
  }
}
