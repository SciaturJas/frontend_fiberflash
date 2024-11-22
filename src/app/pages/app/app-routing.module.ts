import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { EmailDetailsComponent } from './email-details/email-details.component';
import { EmailComponent } from './email/email.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { ForumComponent } from './forum/forum.component';
import { ForumdetailsComponent } from '../profile/forumdetails/forumdetails.component';

const routes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'email', component: EmailComponent },
  { path: 'explorer', component: ExplorerComponent },
  { path: 'emaildetails', component: EmailDetailsComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'forumdetails', component: ForumdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
