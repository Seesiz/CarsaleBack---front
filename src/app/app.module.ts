import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
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
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import * as fr from '@angular/common/locales/fr';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MainComponent,
    StatistiqueComponent,
    MarqueComponent,
    CategorieComponent,
    ModeleComponent,
    ValidationComponent,
    LoginComponent,
  ],

  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  imports: [
    BrowserModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    FormsModule,
    CanvasJSAngularChartsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
