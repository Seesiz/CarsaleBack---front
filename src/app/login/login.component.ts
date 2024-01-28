import { Component, EventEmitter, Output } from '@angular/core';
import { GeneraliserService } from '../service/generaliser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Output() connection: EventEmitter<void> = new EventEmitter<void>();
  data: any = {};
  constructor(private generalise: GeneraliserService) {}
  login() {
    try {
      const response = this.generalise.insert('admins/login', this.data);
      this.data = {};
      this.connection.emit();
    } catch (error) {
      alert(error);
    }
  }
}
