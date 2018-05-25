import {ToastrComponent} from "./toastr.component";
import {ToasterService} from "angular2-toaster";

export class CcfsComponent extends ToastrComponent {
  geoSettings: any = {
    showCurrentLocation: false,
    showRecentSearch: false,
    resOnSearchButtonClickOnly: false,
    inputPlaceholderText: "",
    geoCountryRestriction: ["nz"]
  };

  constructor(protected toasterService: ToasterService) {
    super(toasterService);
  }
}
