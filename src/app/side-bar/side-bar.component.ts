import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  data: any[] = [];
  ngOnInit() {
    this.data = [
      {
        name: 'Statistique',
        choice: [
          {
            name: 'Graph entrée',
            numero: 1,
            icon: '',
          },
          {
            name: 'Graph sortie',
            numero: 1,
            icon: '',
          },
        ],
      },
      {
        name: 'Paramètre',
        choice: [
          {
            name: 'Categorie',
            numero: 2,
            icon: '',
          },
          {
            name: 'Marque',
            numero: 3,
            icon: '',
          },
          {
            name: 'Modèle',
            numero: 4,
            icon: '',
          },
        ],
      },
    ];
  }
}
