import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArtWorkService {
  constructor(private http: HttpClient) {}
  pokemonUrl = 'https://pokeapi.co/api/v2/pokemon';

  url =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png';

  artWork() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/');
  }
}
