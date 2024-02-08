import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isConnected: boolean = false;

  ngOnInit() {
    if (sessionStorage.getItem('carsaleAdminConnected') != null) {
      this.isConnected = true;
    }
  }

  connection() {
    this.isConnected = !this.isConnected;
  }
}
export const url = 'https://carsale-back-production.up.railway.app';
