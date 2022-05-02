import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignedreviewComponent } from './assignedreview/assignedreview.component';
import { CompletedReviewComponent } from './completed-review/completed-review.component';
import { MyreviewComponent } from './myreview/myreview.component';
import { CancelReviewComponent } from './cancel-review/cancel-review.component';
import { EditreviewComponent } from './editreview/editreview.component';
import { ScheduledreviewComponent } from './scheduledreview/scheduledreview.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignedreviewComponent,
    CompletedReviewComponent,
    MyreviewComponent,
    CancelReviewComponent,
    EditreviewComponent,
    ScheduledreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
