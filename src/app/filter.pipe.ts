import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    return items.filter((item) => {
      if (item && item.name && typeof item.name === 'string') {
        return item.name.toLowerCase().includes(searchText);
      }
      return false;
    });
  }
}
