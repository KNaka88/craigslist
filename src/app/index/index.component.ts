import { Component, OnInit } from '@angular/core';
import { CraigsList } from '../craigslist.model';
import { Router } from '@angular/router';
import { CraigslistService } from '../craigslist.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [CraigslistService]
})

export class IndexComponent implements OnInit {
  craigsLists: CraigsList[];
  categories: string[];

  constructor(private router: Router, private craigsListService: CraigslistService) {}

  ngOnInit() {
    this.craigsLists = this.craigsListService.getCraigsLists();

    this.categories = this.craigsListService.getCraigsListsCategories();
  }

  routeByCategory(category: string) {
    this.router.navigate(['category', category]);
  }

}
