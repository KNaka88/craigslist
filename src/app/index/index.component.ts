import { Component, OnInit } from '@angular/core';
import { CraigsList } from '../craigslist.model';
import { CraigslistService } from '../craigslist.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [CraigslistService]
})

export class IndexComponent implements OnInit {
  craigsLists: CraigsList[];

  constructor(private craigsListService: CraigslistService) {}

  ngOnInit() {
    this.craigsLists = this.craigsListService.getCraigsLists();
  }

}
