import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignedreviewComponent } from './assignedreview/assignedreview.component';
import { CancelReviewComponent } from './cancel-review/cancel-review.component';
import { CompletedReviewComponent } from './completed-review/completed-review.component';
import { EditreviewComponent } from './editreview/editreview.component';
import { MyreviewComponent } from './myreview/myreview.component';
import { ScheduledreviewComponent } from './scheduledreview/scheduledreview.component';

const routes: Routes = [
  {path:'scheduledreview',component:ScheduledreviewComponent},
  {path:'myreview',component:MyreviewComponent},
  {path:'editreview',component:EditreviewComponent},
  {path:'completed-review',component:CompletedReviewComponent},
  {path:'cancel-review',component:CancelReviewComponent},
  {path:'assignedreview',component:AssignedreviewComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
