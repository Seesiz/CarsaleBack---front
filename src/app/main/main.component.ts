import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  @Output() connection: EventEmitter<void> = new EventEmitter<void>();
  dataToExport: any = {};
  horizontalBar: any[] = [{ header: 'Statistique', numero: 1 }];
  selected: any = {};

  ngOnInit() {
    this.dataToExport.title = 'Categorie';
    this.selected = this.horizontalBar[0];
  }

  changeComponent(data: any) {
    this.horizontalBar = data;
    this.selected = this.horizontalBar[0];
  }

  logout() {
    sessionStorage.removeItem('carsaleAdminConnected');
    this.connection.emit();
  }
}
