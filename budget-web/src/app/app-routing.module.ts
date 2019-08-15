import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { RevenuesListComponent } from "./revenues-list/revenues-list.component";
import { RevenueFormComponent } from "./revenue-form/revenue-form.component";

const routes: Routes = [
  { path: "revenues", component: RevenuesListComponent },
  { path: "revenues/add", component: RevenueFormComponent }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
