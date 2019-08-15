import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RevenueService } from "../revenue.service";
import { Revenue } from "../revenue";

@Component({
  selector: "app-revenue-form",
  templateUrl: "./revenue-form.component.html",
  styleUrls: ["./revenue-form.component.css"]
})
export class RevenueFormComponent {
  revenue: Revenue;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private revenueService: RevenueService
  ) {
    this.revenue = new Revenue();
  }

  onSubmit() {
    this.revenueService
      .save(this.revenue)
      .subscribe(result => this.gotoRevenueList());
  }

  gotoRevenueList() {
    this.router.navigate(["/revnues"]);
  }
}
