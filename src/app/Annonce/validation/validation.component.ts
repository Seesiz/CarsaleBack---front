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
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements AfterViewInit {
  displayedColumns: string[] = ['Date', 'Annonceur','Model','Couleur','Prix', 'Action'];
  dataSource = new MatTableDataSource();
  data: any[] = [];

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private generaliserService: GeneraliserService,
    private annonceService:AnnonceService
  ) {}
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  async ngAfterViewInit() {
    await this.getAllAnnonceInvalide();
    this.init();
  }
  init() {
    this.dataSource = new MatTableDataSource(this.data);
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  async getAllAnnonceInvalide() {
    try {
      const response = await this.generaliserService.getAll('annonces/invalide');
      this.data = response;
    } catch (error) {
      alert(error);
    }
  }
  
  async valider(idAnnonce:String){
    await this.annonceService.valider(idAnnonce);
    await this.getAllAnnonceInvalide();
    await this.init();
  }

}

