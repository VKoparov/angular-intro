import { TestBed } from '@angular/core/testing';

import { ExampleGuard } from './example.guard';
import {ObservablesService} from "../../../service-observables/example/service/observables.service";

describe('ExampleGuard', () => {
  let guard: ExampleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ObservablesService,
          useValue: {}
        }
      ]
    });
    guard = TestBed.inject(ExampleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
