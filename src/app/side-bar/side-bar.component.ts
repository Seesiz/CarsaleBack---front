import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  constructor(private router: Router) {}

  @Output() changeHeader: EventEmitter<any> = new EventEmitter<any>();

  component: any[] = [];

  ngOnInit() {
    this.component.push([{ header: 'Statistique', numero: 1 }]);
    this.component.push([
      { header: 'Marque', numero: 2 },
      { header: 'Categorie', numero: 3 },
      { header: 'Modèle', numero: 4 },
    ]);
    this.component.push([{ header: 'Validation', numero: 5 }]);
  }
}
