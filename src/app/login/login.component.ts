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
  async login() {
    try {
      const form = new FormData();
      form.append('mail', this.data.mail);
      form.append('motDePass', this.data.motDePass);
      const response = await this.generalise.insert('admins/login', form);
      this.data = {};
      if (response.message == undefined) {
        sessionStorage.setItem('carsaleAdminConnected', response.data.idAdmin);
        this.connection.emit();
      } else {
        alert(response.message);
      }
    } catch (error) {
      alert(error);
    }
  }
}
