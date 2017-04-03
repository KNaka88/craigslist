import { Injectable } from '@angular/core';
import { CraigsList } from './craigslist.model';
import { CRAIGSLIST } from './mock-craigslist';

@Injectable()
export class CraigslistService {

  constructor() { }

  getCraigsLists() {
    return CRAIGSLIST;
  }

  getCraigsListsCategories() {
    let categories: string[] = [];

    CRAIGSLIST.forEach( (ad) => {
      if (categories.indexOf(ad.category) === -1) {
        categories.push(ad.category);
      }
    });
    return categories;
  }

  getAdsByCategory(category: string) {
    let ads: CraigsList[] = [];

    CRAIGSLIST.forEach((ad) => {
      if (ad.category === category) {
        ads.push(ad);
      }
    });
    return ads;
  }

}
