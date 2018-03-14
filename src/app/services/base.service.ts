import {environment} from "../../environments/environment";

export class AbstractService {
  baseURL: string = environment.httpConfig.protocol + environment.httpConfig.host + environment.httpConfig.port;
}
