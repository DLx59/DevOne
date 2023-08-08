import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBlockDetailsComponent } from './service-block-details.component';

describe('ServiceBlockDetailsComponent', () => {
  let component: ServiceBlockDetailsComponent;
  let fixture: ComponentFixture<ServiceBlockDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceBlockDetailsComponent]
    });
    fixture = TestBed.createComponent(ServiceBlockDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
