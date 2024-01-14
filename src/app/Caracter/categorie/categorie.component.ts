import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GeneraliserService } from 'src/app/service/generaliser.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css'],
})
export class CategorieComponent {
  displayedColumns: string[] = ['Designation', 'Action'];
  dataSource = new MatTableDataSource();
  data: any[] = [];
  nom: string = '';
  constructor(private generaliserService: GeneraliserService) {}
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  async ngAfterViewInit() {
    await this.getAllCategorie();
    this.init();
  }
  init() {
    this.dataSource = new MatTableDataSource(this.data);
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  async getAllCategorie() {
    try {
      const response = await this.generaliserService.getAll('categories');
      this.data = response;
    } catch (error) {
      alert(error);
    }
  }
  async insert() {
    const data = {
      designation: this.nom,
    };
    if (data.designation.toString().trim() == '') {
      return;
    }
    try {
      const response = await this.generaliserService.insert('categories', data);
      this.data.push(response);
      this.init();
      this.nom = '';
    } catch (error) {
      alert(error);
    }
  }
}
