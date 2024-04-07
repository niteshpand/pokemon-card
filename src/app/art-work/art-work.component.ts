import { Component } from '@angular/core';
import { ArtWorkService } from './art-work.service';

@Component({
  selector: 'app-art-work',
  templateUrl: './art-work.component.html',
  styleUrls: ['./art-work.component.css'],
})
export class ArtWorkComponent {
  items: any = [];
  isLoading = false;

  constructor(private artWorkService: ArtWorkService) {}

  toggleLoading = () => (this.isLoading = !this.isLoading);

  loadData = () => {
    this.toggleLoading;
    this.artWorkService.artWork();
  };

  ngOnInit() {
    this.artWorkService.artWork().subscribe((res: any) => {
      res.results.map((res: any) => {
        this.items.push(res);
        console.log(this.items);
      });
    });
  }

  imageUrl(pokemonUrl: string): string {
    const pokemonId = this.getPokemonId(pokemonUrl);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
  }

  private getPokemonId(pokemonUrl: string): string {
    return pokemonUrl.split('/').slice(-2, -1)[0];
  }
}
