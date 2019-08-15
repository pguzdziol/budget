import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RevenuesListComponent } from './revenues-list/revenues-list.component';
import { RevenueFormComponent } from './revenue-form/revenue-form.component';
import { AppRoutingModule } from './app-routing.module';
import { RevenueService } from './revenue.service';

@NgModule({
  declarations: [
    AppComponent,
    RevenuesListComponent,
    RevenueFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	  HttpClientModule,
	  FormsModule
  ],
  providers: [RevenueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
