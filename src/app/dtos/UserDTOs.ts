export interface Login {
  email: string;
  password: string;
}

export interface User {
  userID: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userCompanyInfo: UserCompanyInfo;
}

export class AccountType {
  id: number;
  name: string;
  price: number;
}

export class UserCompanyInfo {
  id: number;
  companyName: string;
  address: string;
  email: string;
  phoneNumber: string;
  accountType: AccountType;
}

export class UserCompanyInvoice {
  id: number;
  userCompanyID: number;
  invoiceNumber: string;
  invoiceDate: string;
  netAmount: number;
  taxAmount: number;
  grossAmount: number;
  items: UserCompanyInvoiceItem[];
  status: string;
}

export class UserCompanyInvoiceItem {
  id: number;
  seqNum: string;
  description: string;
  unitprice: string;
  quantitiy: string;
  amount: number;
}

export enum Frequence { Monthly = 1, Annually };

export class ProductItem {
  id: number;
  accountType: AccountType;
  description: string;
  unitPrice: string;
  frequence: Frequence;
}
