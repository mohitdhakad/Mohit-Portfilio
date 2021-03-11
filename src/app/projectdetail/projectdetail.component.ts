import { Component, OnInit } from '@angular/core';
import { CardConfig } from 'src/types';


@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.scss']
})
export class ProjectdetailComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  name = 'Angular';
  cardConfigs:CardConfig[] =
  [
    {title:'Smart Dustbin', imageUrl:  'assets/smartdustbin.png'}
,  { title:'Event Registration', imageUrl: 'assets/eventregistration.png'}

  ]
  // images = [this.image1, this.image2, this.image3, this.image4];
}


