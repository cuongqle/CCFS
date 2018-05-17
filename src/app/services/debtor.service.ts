import {Injectable} from "@angular/core";
import {AbstractService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "angular-2-local-storage";
import {Debtor, DebtorInvoice} from "../dtos/debtorDTOs";

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

  createDebtor(debtor: Debtor) {
    return this.http.post(`${this.baseURL}/api/debtor`, debtor, {
      headers: {
        'Authorization': this.getAuthorization()
      }
    });
  }

  updateDebtor(debtor: Debtor) {
    return this.http.put(`${this.baseURL}/api/debtor`, debtor, {
      headers: {
        'Authorization': this.getAuthorization()
      }
    });
  }

  createDebtorInvoice(invoice: DebtorInvoice) {
    return this.http.post(`${this.baseURL}/api/invoice`, invoice, {
      headers: {
        'Authorization': this.getAuthorization()
      }
    });
  }

  updateDebtorInvoice(invoice: DebtorInvoice) {
    return this.http.put(`${this.baseURL}/api/invoice`, invoice, {
      headers: {
        'Authorization': this.getAuthorization()
      }
    });
  }
}
