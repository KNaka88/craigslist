import { Component, OnInit } from '@angular/core';
import { CraigsList } from '../craigslist.model';
import { Router } from '@angular/router';
import { CraigslistService } from '../craigslist.service';


@Component({
  selector: 'app-one-ad',
  templateUrl: './one-ad.component.html',
  styleUrls: ['./one-ad.component.css'],
  providers: [CraigslistService]
})
export class OneAdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
