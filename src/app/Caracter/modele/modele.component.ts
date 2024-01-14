import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Action } from 'rxjs/internal/scheduler/Action';
import { GeneraliserService } from 'src/app/service/generaliser.service';

@Component({
  selector: 'app-modele',
  templateUrl: './modele.component.html',
  styleUrls: ['./modele.component.css'],
})
export class ModeleComponent {
  displayedColumns: string[] = ['Marque', 'Categorie', 'Designation', 'Action'];
  dataSource = new MatTableDataSource();
  constructor(private generaliserService: GeneraliserService) {}
  data: any[] = [];
  listCategorie: any[] = [];
  listMarque: any[] = [];
  nom: string = '';
  marque: number = this.listMarque[0].idMarque;
  categorie: number = this.listCategorie[0].idCategorie;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  async ngAfterViewInit() {
    await this.getAllModel();
    await this.getAllCategorie();
    await this.getAllMarque();
    this.init();
  }
  init() {
    this.dataSource = new MatTableDataSource(this.data);
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
  insert() {}

  async getAllModel() {
    try {
      const response = await this.generaliserService.getAll('models');
      this.data = response;
    } catch (error) {
      alert(error);
    }
  }

  async getAllCategorie() {
    try {
      const response = await this.generaliserService.getAll('categories');
      this.listCategorie = response;
    } catch (error) {
      alert(error);
    }
  }

  async getAllMarque() {
    try {
      const response = await this.generaliserService.getAll('marques');
      this.listMarque = response;
    } catch (error) {
      alert(error);
    }
  }
}
