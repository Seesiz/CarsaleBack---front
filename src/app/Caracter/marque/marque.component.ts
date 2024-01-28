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
  data: any[] = [];
  searchedText: string = '';

  constructor(private generaliserService: GeneraliserService) {}
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  async ngAfterViewInit() {
    await this.getAllMarque();
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
    };
    if (data.designation.toString().trim() == '') {
      return;
    }
    try {
      const response = await this.generaliserService.insert('marques', data);
      this.data.push(response);
      this.init(this.data);
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

  async modifierMarque(modifier: any) {
    try {
      const response = await this.generaliserService.modifier(
        'marques',
        modifier
      );
    } catch (error) {
      alert(error);
    }
  }

  search() {
    if (this.searchedText.toString().trim() != null) {
      const filterData = this.data.filter((item) =>
        item.designation.toLowerCase().includes(this.searchedText.toLowerCase())
      );
      this.init(filterData);
    } else {
      this.init(this.data);
    }
  }
}
