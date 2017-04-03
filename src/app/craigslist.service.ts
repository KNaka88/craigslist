import { Injectable } from '@angular/core';
import { CraigsList } from './craigslist.model';
import { CRAIGSLIST } from './mock-craigslist';

@Injectable()
export class CraigslistService {

  constructor() { }

  getCraigsLists() {
    return CRAIGSLIST;
  }

}
