import { Component, HostListener } from '@angular/core';
import { ArtWorkService } from './art-work.service';

@Component({
  selector: 'app-art-work',
  templateUrl: './art-work.component.html',
  styleUrls: ['./art-work.component.css'],
})
export class ArtWorkComponent {
  items: any = [];
  currentPage = 1;
  pageSize = 20;
  totalItems = 0;
  isLoading = false;
  searchKey: string = '';

  constructor(private artWorkService: ArtWorkService) {}

  ngOnInit() {
    this.artWorkService.search.subscribe((val: any) => {
      this.searchKey = val;
    });

    this.fetchData();
  }

  fetchData() {
    if (!this.isLoading) {
      this.isLoading = true;
      this.artWorkService
        .artWork(this.currentPage, this.pageSize)
        .subscribe((res) => {
          this.items.push(...res.results);
          this.isLoading = false;
        });
    }
  }

  imageUrl(pokemonUrl: string): string {
    const pokemonId = this.getPokemonId(pokemonUrl);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
  }

  getPokemonId(pokemonUrl: string): string {
    return pokemonUrl.split('/').slice(-2, -1)[0];
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const pos =
      document.documentElement.scrollTop +
      document.documentElement.offsetHeight;
    const max = document.documentElement.scrollHeight;
    if (pos >= max && !this.isLoading) {
      this.currentPage++;
      this.fetchData();
    }
  }
}
