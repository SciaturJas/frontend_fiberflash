import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { LayoutModule } from '../shared/layout/layout.module';
import { ChatboxComponent } from './layout/chatbox/chatbox.component';
import { ChatlistComponent } from './layout/chatlist/chatlist.component';
import { NotificationComponent } from './layout/notification/notification.component';
import { PageFooterComponent } from './layout/page-footer/page-footer.component';
import { Daterangepicker } from 'ng2-daterangepicker';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PagesComponent,
    ChatboxComponent,
    ChatlistComponent,
    NotificationComponent,
    PageFooterComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    Daterangepicker
  ],
  exports: [

  ]
})
export class PagesModule { }
