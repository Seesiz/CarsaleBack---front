import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { GeneraliserService } from 'src/app/service/generaliser.service';
import { AnnonceService } from './../../service/annonce.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css'],
})
export class ValidationComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'Date',
    'Annonceur',
    'Model',
    'Couleur',
    'Prix',
    'Action',
  ];
  changeCommission: boolean = false;
  dataSource = new MatTableDataSource();
  data: any[] = [];
  search: string = '';
  commission: number = 5;

  constructor(
    private generaliserService: GeneraliserService,
    private annonceService: AnnonceService
  ) {}
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  async ngAfterViewInit() {
    await this.getAllAnnonceInvalide();
    this.init(this.data);
  }
  init(data: any[]) {
    this.dataSource = new MatTableDataSource(data);
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  async getAllAnnonceInvalide() {
    try {
      const response = await this.generaliserService.getAll(
        'annonces/invalide'
      );
      this.data = response;
    } catch (error) {
      alert(error);
    }
  }

  async valider(idAnnonce: String) {
    await this.annonceService.valider(idAnnonce);
    await this.getAllAnnonceInvalide();
    this.init(this.data);
  }

  searchData() {
    const lowerText = this.search.toLowerCase();
    if (lowerText.trim() != '') {
      const searchData = this.data.filter(
        (item) =>
          item.voiture.categorie.designation
            .toLowerCase()
            .includes(lowerText) ||
          item.voiture.model.designation.toLowerCase().includes(lowerText) ||
          item.voiture.model.marque.designation
            .toLowerCase()
            .includes(lowerText) ||
          (item.annonceur.nom + ' ' + item.annonceur.prenom)
            .toLowerCase()
            .includes(lowerText) ||
          item.voiture.couleur.toLowerCase().includes(lowerText)
      );
      this.init(searchData);
    } else {
      this.init(this.data);
    }
  }

  updateCommission() {
    this.changeCommission = false;
    try {
      const response = this.generaliserService.modifier(
        'commission',
        this.commission
      );
    } catch (error) {
      alert(error);
    }
  }
}
