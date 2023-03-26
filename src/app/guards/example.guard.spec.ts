import { TestBed } from '@angular/core/testing';

import { ExampleGuard } from './example.guard';
import {ExampleService} from "../services/example.service";

describe('ExampleGuard', () => {
  let guard: ExampleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ExampleService,
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
