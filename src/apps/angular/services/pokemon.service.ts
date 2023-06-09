import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) {}

  getPokemonByName(name: string): Observable<Object> {
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
