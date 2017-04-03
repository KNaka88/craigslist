import { Component, OnInit } from '@angular/core';
import { CraigsList } from '../craigslist.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CraigslistService } from '../craigslist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CraigslistService]
})
export class CategoryComponent implements OnInit {
  category: string = null;
  thisCraigsList: CraigsList[];


  constructor(
    private router: ActivatedRoute,
    private oneAdRouter: Router,
    private location: Location,
    private craigsListService: CraigslistService
  ){}

  ngOnInit() {
    this.router.params.forEach((urlParameters)=> {
      this.category = urlParameters['category'];
    });
    this.thisCraigsList = this.craigsListService.getAdsByCategory(this.category);
  }

  goToDetailPage(clickedAd: CraigsList) {
    this.oneAdRouter.navigate(['category', clickedAd.category, clickedAd.id]);
  }
}
