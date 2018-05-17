import {ToasterConfig, ToasterService} from "angular2-toaster";

export class ToastrComponent {
  toasterconfig: ToasterConfig = new ToasterConfig(
  {
    tapToDismiss: true,
    timeout: 5000
  });

  constructor(protected toasterService: ToasterService) {
  }

  protected showSuccess(message: string) {
    this.toasterService.pop('success', 'Success', message)
  }

  protected showError(message: string) {
    this.toasterService.pop('error', 'Error', message);
  }
}
