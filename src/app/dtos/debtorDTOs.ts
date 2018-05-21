export enum AddressType {
  BillingAddress = 1,
  ServiceAddress
}

export enum DebtorType {
  Company = 1,
  NonCompany
}

export enum DebtorStatus {
  Active = 1,
  Close
}

export class Address {
  addressType : AddressType;
  address: string;
  city: string;
  postcode: string;
}

export class Debtor {
  id: number;
  name: string;
  debtorType: DebtorType;
  primeContactName: string;
  primeContactTitle: string;
  directorName: string;
  mobileNumber: string;
  email: string;
  addresses: Address[];
  status: DebtorStatus;
  invoices: DebtorInvoice[];
  userCompanyID: number;
}

export class DebtorInvoice {
  id: number;
  debtorId: number;
  invoiceNumber: string;
  invoiceDate: string;
  invoiceAmount: number;
  outstandingAmount: number;
  status: string;
  userCompanyID: number;
}
