import { TestBed } from '@angular/core/testing';

import { LightRouteService } from './light-route.service';

describe('LightRouteService', () => {
  let service: LightRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LightRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
