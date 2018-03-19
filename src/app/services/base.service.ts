import {environment} from "../../environments/environment";
import {LocalStorageService} from "angular-2-local-storage";

export class AbstractService {
  baseURL: string = environment.httpConfig.protocol + environment.httpConfig.host + environment.httpConfig.port;

  constructor(protected localStorageService: LocalStorageService) {
  }

  getAuthorization() {
    const currentUser: any = JSON.parse(this.localStorageService.get('currentUser'));
    return "Bearer " + currentUser.token;
  }
}
