import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EmailDetailsComponent } from './email-details/email-details.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TagifyModule } from 'ngx-tagify';
import { FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ChartsModule } from 'ng2-charts';
import { FullCalendarModule, Interaction } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';// a plugin!
import interactionPlugin from '@fullcalendar/daygrid'; // a plugin!
import { ForumComponent } from './forum/forum.component';
import { ForumdetailsComponent } from '../profile/forumdetails/forumdetails.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    ExplorerComponent,
    CalendarComponent,
    EmailDetailsComponent,
    ForumComponent,
    ForumdetailsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    CKEditorModule,
    FormsModule,
    ChartsModule,
    NgCircleProgressModule,
    TagifyModule.forRoot(),
    FullCalendarModule,
  ]
})
export class AppModule { }
