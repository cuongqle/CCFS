import {Component, Input} from '@angular/core';
import {User} from "../../dtos/userDTOs";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {
  @Input() loggedUser: User;
}
