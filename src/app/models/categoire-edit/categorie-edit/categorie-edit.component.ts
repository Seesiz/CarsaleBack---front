import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenericService } from 'src/services/generic.service';
import { Categorie } from '../../categorie.model';

@Component({
  selector: 'app-categorie-edit',
  templateUrl: './categorie-edit.component.html',
  styleUrls: ['./categorie-edit.component.css'],
})
export class CategorieEditComponent {
  category: Categorie = { id: 0, name: '' }; // Initialisation avec des valeurs par défaut

  constructor(
    private categorieService: GenericService<Categorie>,
    private route: ActivatedRoute
  ) {
    const categoryIdParam = this.route.snapshot.paramMap.get('id');

    if (categoryIdParam) {
      const categoryId = +categoryIdParam;
      this.category = this.categorieService.getAllItems().find(c => c.id === categoryId) || { id: 0, name: '' };
    }
  }

  saveChanges() {
    this.categorieService.updateItem(this.category);
  }
}
