// src/app/components/categorie-list/categorie-list.component.ts
import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/services/generic.service';
import { Categorie } from '../../categorie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css'],
})
export class CategorieListComponent implements OnInit {
  categories: Categorie[] = [];

  constructor(
    private categorieService: GenericService<Categorie>,
    private router: Router
  ) {}

  ngOnInit() {
    this.categories = this.categorieService.getAllItems();
  }

  deleteCategory(id: number) {
    // Ajoutez votre logique pour supprimer une catégorie
    this.categorieService.deleteItem(id);
  }

  editCategory(id: number) {
    this.router.navigate(['/categories/edit', id]);
  }
}
