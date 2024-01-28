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
  displayedColumns: string[] = ['Marque', 'Designation', 'Action'];
  dataSource = new MatTableDataSource();
  constructor(private generaliserService: GeneraliserService) {}
  data: any[] = [];
  listMarque: any[] = [];
  nom: string = '';
  marque: number = 0;
  searchedText: string = '';

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  async ngAfterViewInit() {
    await this.getAllModel();
    await this.getAllMarque();
    if (this.listMarque.length > 0) this.marque = this.listMarque[0].idMarque;
    this.init(this.data);
  }
  init(data: any[]) {
    this.dataSource = new MatTableDataSource(data);
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
  async insert() {
    const data = {
      designation: this.nom,
      marque: { idMarque: this.marque },
    };
    if (data.designation.toString().trim() == '') {
      return;
    }
    try {
      const response = await this.generaliserService.insert('models', data);
      this.data.push(response);
      this.init(this.data);
      this.nom = '';
    } catch (error) {
      alert(error);
    }
  }

  async getAllModel() {
    try {
      const response = await this.generaliserService.getAll('models');
      this.data = response;
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

  search() {
    if (this.searchedText.toString().trim() != null) {
      const filterData = this.data.filter((item) =>
        (item.marque.designation + ' ' + item.designation)
          .toLowerCase()
          .includes(this.searchedText.toLowerCase())
      );
      this.init(filterData);
    } else {
      this.init(this.data);
    }
  }

  async modifierModel(modifier: any, index: number) {
    try {
      const response = await this.generaliserService.modifier(
        'models',
        modifier
      );
      this.data[index] = response;
      this.init(this.data);
    } catch (error) {
      alert(error);
    }
  }
}
