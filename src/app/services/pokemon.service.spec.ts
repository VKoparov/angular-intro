import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import {HttpClient} from "@angular/common/http";

describe('ExampleService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: {}
        }
      ]
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
