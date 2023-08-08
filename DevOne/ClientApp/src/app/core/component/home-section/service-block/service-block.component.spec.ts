import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBlockComponent } from './service-block.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('ServiceBlockComponent', () => {
  let component: ServiceBlockComponent;
  let fixture: ComponentFixture<ServiceBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceBlockComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(ServiceBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
