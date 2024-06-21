import { Component } from '@angular/core';
import { ArtWorkService } from '../art-work/art-work.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  searchTerm: string = '';
  constructor(private artService: ArtWorkService) {}

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.artService.search.next(this.searchTerm);
  }
}
