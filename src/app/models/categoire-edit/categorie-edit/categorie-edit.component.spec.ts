import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieEditComponent } from './categorie-edit.component';

describe('CategorieEditComponent', () => {
  let component: CategorieEditComponent;
  let fixture: ComponentFixture<CategorieEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorieEditComponent]
    });
    fixture = TestBed.createComponent(CategorieEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
