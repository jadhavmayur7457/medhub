import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductByCategoriesComponent } from './view-product-by-categories.component';

describe('ViewProductByCategoriesComponent', () => {
  let component: ViewProductByCategoriesComponent;
  let fixture: ComponentFixture<ViewProductByCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProductByCategoriesComponent]
    });
    fixture = TestBed.createComponent(ViewProductByCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
