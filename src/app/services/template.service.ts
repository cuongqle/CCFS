import {Injectable} from "@angular/core";
import {AbstractService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "angular-2-local-storage";

@Injectable()
export class TemplateService extends AbstractService {
  constructor(private http: HttpClient, localStorageService: LocalStorageService) {
    super(localStorageService);
  }

  getTemplateList() {
    return this.http.get(`${this.baseURL}/api/templates`, {
      headers: {
        'Authorization': this.getAuthorization()
      }
    });
  }

  getTemplateHtml(type: string) {
    return this.http.get(`${this.baseURL}/api/template/html/${type}`, {
      headers: {
        'Authorization': this.getAuthorization()
      },
      responseType: 'text'
    });
  }
}
