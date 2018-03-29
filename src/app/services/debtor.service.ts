import {Injectable} from "@angular/core";
import {AbstractService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "angular-2-local-storage";

@Injectable()
export class DebtorService extends AbstractService {
  constructor(private http: HttpClient, localStorageService: LocalStorageService) {
    super(localStorageService);
  }

  getDebtorList() {
    return this.http.get(`${this.baseURL}/api/debtors`, {
      headers: {
        'Authorization': this.getAuthorization()
      }
    });
  }

  getDebtorById(debtorId: string) {
    return this.http.get(`${this.baseURL}/api/debtor/${debtorId}`, {
      headers: {
        'Authorization': this.getAuthorization()
      }
    });
  }

  getDebtorInvoiceById(invoiceId: string) {
    return this.http.get(`${this.baseURL}/api/invoice/${invoiceId}`, {
      headers: {
        'Authorization': this.getAuthorization()
      }
    });
  }
}
