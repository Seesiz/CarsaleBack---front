import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { CategorieListComponent } from './models/categorie-list/categorie-list/categorie-list.component';
import { GenericService } from 'src/services/generic.service';
import { CategorieEditComponent } from './models/categoire-edit/categorie-edit/categorie-edit.component';
import { MainComponent } from './main/main.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { MarqueComponent } from './Caracter/marque/marque.component';
import { CategorieComponent } from './Caracter/categorie/categorie.component';
import { ModeleComponent } from './Caracter/modele/modele.component';
import { ValidationComponent } from './Annonce/validation/validation.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    CategorieListComponent,
    CategorieEditComponent,
    MainComponent,
    StatistiqueComponent,
    MarqueComponent,
    CategorieComponent,
    ModeleComponent,
    ValidationComponent,
  ],

  providers: [GenericService],
  imports: [
    BrowserModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
