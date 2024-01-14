import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { GeneraliserService } from 'src/app/service/generaliser.service';

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css'],
})
export class MarqueComponent implements AfterViewInit {
  displayedColumns: string[] = ['Designation', 'Action'];
  dataSource = new MatTableDataSource();
  nom: string = '';
  modifier: any = {};
  data: any[] = [];

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private generaliserService: GeneraliserService
  ) {}
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  async ngAfterViewInit() {
    await this.getAllMarque();
    this.init();
  }
  init() {
    this.dataSource = new MatTableDataSource(this.data);
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
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
      const response = await this.generaliserService.insert('marques', data);
      this.data.push(response);
      this.init();
      this.nom = '';
    } catch (error) {
      alert(error);
    }
  }

  async getAllMarque() {
    try {
      const response = await this.generaliserService.getAll('marques');
      this.data = response;
    } catch (error) {
      alert(error);
    }
  }

  async modifierMarque() {
    try {
      const response = await this.generaliserService.modifier(
        'marques',
        this.modifier
      );
    } catch (error) {
      alert(error);
    }
  }
}
