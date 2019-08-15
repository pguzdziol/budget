import { Component, OnInit } from '@angular/core';
import { Revenue } from '../revenue';
import { RevenueService } from '../revenue.service';
@Component({
  selector: 'app-revenues-list',
  templateUrl: './revenues-list.component.html',
  styleUrls: ['./revenues-list.component.css']
})
export class RevenuesListComponent implements OnInit {

	revenues: Revenue[];

	constructor(private revenueService: RevenueService) { }

  ngOnInit() {
	  this.revenueService.findAll().subscribe(data => {
	  this.revenues = data;
	  });
  }

}
