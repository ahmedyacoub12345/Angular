import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Ahmed/Home/home/home.component';
import { NavComponent } from './Ahmed/Nav/nav/nav.component';
import { ServiceComponent } from './Ahmed/Service/service/service.component';
import { SubServiceComponent } from './Ahmed/SubService/sub-service/sub-service.component';
import { RouterModule } from '@angular/router';
import { LectureComponent } from './Ahmed/lecture/lecture.component';
import { FormsModule, NgForm } from '@angular/forms';
import { SubscriptionComponent } from './Ahmed/subscription/subscription.component';
import { ServiceDetailsComponent } from './Ahmed/service-details/service-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ServiceComponent,
    SubServiceComponent,
    LectureComponent,
    SubscriptionComponent,
    ServiceDetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "Services", component: ServiceComponent },
      { path: "SubServices/:id", component: SubServiceComponent },
      { path: "lecture", component: LectureComponent },
      { path: "subscription/:id", component: SubscriptionComponent },
      { path: "details/:id", component: ServiceDetailsComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
