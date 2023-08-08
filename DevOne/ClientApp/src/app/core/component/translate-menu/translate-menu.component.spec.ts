import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateMenuComponent } from './translate-menu.component';

describe('TranslateMenuComponent', () => {
  let component: TranslateMenuComponent;
  let fixture: ComponentFixture<TranslateMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranslateMenuComponent]
    });
    fixture = TestBed.createComponent(TranslateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
