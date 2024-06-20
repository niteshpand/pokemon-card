import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArtWorkService {
  public search = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}
  pokemonUrl = 'https://pokeapi.co/api/v2/pokemon';

  artWork(page: number, pageSize: number): Observable<any> {
    const params = new HttpParams()
      .set('offset', ((page - 1) * pageSize).toString())
      .set('limit', pageSize.toString());
    return this.http.get<any>(this.pokemonUrl, { params });
  }
}
