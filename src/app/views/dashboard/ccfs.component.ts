import {ToastrComponent} from "./toastr.component";
import {ToasterService} from "angular2-toaster";

export class CcfsComponent extends ToastrComponent {
  geoSettings: any = {
    showCurrentLocation: false,
    resOnSearchButtonClickOnly: false,
    geoCountryRestriction: ["nz"]
  };

  constructor(protected toasterService: ToasterService) {
    super(toasterService);
  }
}
