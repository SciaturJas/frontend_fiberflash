import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherComponent } from './other.component';
import { OtherRoutingModule } from './other-routing.module';
import { HelpcenterComponent } from './helpcenter/helpcenter.component';
import { PersonalizeComponent } from './personalize/personalize.component';
import { PlanComponent } from './plan/plan.component';
import { EarningComponent } from './earning/earning.component';
import { PaymentComponent } from './payment/payment.component';
import { StatementComponent } from './statement/statement.component';
import { SwiperModule } from 'swiper/angular';
import { ChartsModule } from 'ng2-charts';
import { ContactusComponent } from './contactus/contactus.component';


@NgModule({
  declarations: [
    OtherComponent,
    HelpcenterComponent,
    PersonalizeComponent,
    PlanComponent,
    EarningComponent,
    PaymentComponent,
    StatementComponent,
    ContactusComponent,
  ],
  imports: [
    CommonModule,
    OtherRoutingModule,
    SwiperModule,
    ChartsModule
  ]
})
export class OtherModule { }
