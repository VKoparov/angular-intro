import { TestBed } from '@angular/core/testing';

import { ExampleService } from './example.service';
import {HttpClient} from "@angular/common/http";

describe('ExampleService', () => {
  let service: ExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: {}
        }
      ]
    });
    service = TestBed.inject(ExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
