import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {HeroComponent} from "./hero/hero.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ServiceBlockComponent} from "./service-block/service-block.component";
import {ReviewsComponent} from "../reviews/reviews.component";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, HeroComponent, ServiceBlockComponent, ReviewsComponent],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
