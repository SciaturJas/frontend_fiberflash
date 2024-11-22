import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { FinanceComponent } from './finance/finance.component';
import { InventoryComponent } from './inventory/inventory.component';
import { NetworkComponent } from './network/network.component';
import { SocialComponent } from './social/social.component';
import { LearningComponent } from './learning/learning.component';
import { TitlebarComponent } from '../layout/titlebar/titlebar.component';
import { TitlecalendarComponent } from '../layout/titlecalendar/titlecalendar.component';
import { ProfileRoutingModule } from '../profile/profile-routing.module';
import { OtherRoutingModule } from '../other/other-routing.module';
import { ComponentsRoutingModule } from 'src/app/pages/components/components-routing.module';
import { ColumnresizerComponent } from '../layout/columnresizer/columnresizer.component';
import { SwiperModule } from 'swiper/angular';
import { ChartsModule } from 'ng2-charts';
import { ChartareaComponent } from '../layout/chartarea/chartarea.component';
import { Daterangepicker } from 'ng2-daterangepicker';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { JustLightboxModule } from 'just-lightbox';
import { LightboxModule } from 'ngx-lightbox';
import { ChartareablueComponent } from '../layout/chartareablue/chartareablue.component';
import { ChartarearedComponent } from '../layout/chartareared/chartareared.component';
import { ChartareayellowComponent } from '../layout/chartareayellow/chartareayellow.component';
import { ChartareagreenComponent } from '../layout/chartareagreen/chartareagreen.component';
import { ChartareaincomeComponent } from '../layout/chartareaincome/chartareaincome.component';
import { ChartareaexpenseComponent } from '../layout/chartareaexpense/chartareaexpense.component';
import { ChartbarblueComponent } from '../layout/chartbarblue/chartbarblue.component';
import { ChartdoughtnutComponent } from '../layout/chartdoughtnut/chartdoughtnut.component';
import { ChartareanetworkComponent } from '../layout/chartareanetwork/chartareanetwork.component';
import { ChartbarinventoryComponent } from '../layout/chartbarinventory/chartbarinventory.component';
import { ChartradarComponent } from '../layout/chartradar/chartradar.component';
import { ChartsemidoughnutComponent } from '../layout/chartsemidoughnut/chartsemidoughnut.component';
import { JqvMapComponent } from '../layout/jqv-map/jqv-map.component';
import { ChartarealearningComponent } from '../layout/chartarealearning/chartarealearning.component';
import { ChartbarpinkComponent } from '../layout/chartbarpink/chartbarpink.component';
import { ChartbarredComponent } from '../layout/chartbarred/chartbarred.component';
import { ChartbarpinkbigComponent } from '../layout/chartbarpinkbig/chartbarpinkbig.component';
import { ChartareasocialComponent } from '../layout/chartareasocial/chartareasocial.component';
import { chartdoughtnutsocialComponent } from '../layout/chartdoughtnutsocial/chartdoughtnutsocial.component';
import { ProjectComponent } from './project/project.component';
import { chartdoughnutsmallComponent } from '../layout/chartdoughtnutsmall/chartdoughtnutsmall.component';
import { ChartareabugresolvedComponent } from '../layout/chartareabugresolved/chartareabugresolved.component';
import { ChartareabugraisedComponent } from '../layout/chartareabugraised/chartareabugraised.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    FinanceComponent,
    InventoryComponent,
    NetworkComponent,
    SocialComponent,
    LearningComponent,
    ProjectComponent,
    ColumnresizerComponent,
    ChartareaComponent,
    TitlebarComponent,
    TitlecalendarComponent,
    ChartareablueComponent,
    ChartarearedComponent,
    ChartareayellowComponent,
    ChartareagreenComponent,
    ChartareaincomeComponent,
    ChartareaexpenseComponent,
    ChartbarblueComponent,
    ChartbarpinkComponent,
    ChartbarpinkbigComponent,
    ChartbarredComponent,
    ChartdoughtnutComponent,
    ChartareanetworkComponent,
    ChartbarinventoryComponent,
    ChartradarComponent,
    ChartsemidoughnutComponent,
    JqvMapComponent,
    ChartarealearningComponent,
    ChartareasocialComponent,
    chartdoughtnutsocialComponent,
    chartdoughnutsmallComponent,
    ChartareabugresolvedComponent,
    ChartareabugraisedComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ProfileRoutingModule,
    OtherRoutingModule,
    ComponentsRoutingModule,
    SwiperModule,
    ChartsModule,
    Daterangepicker,
    LightboxModule,
    JustLightboxModule.forRoot(),
    NgCircleProgressModule.forRoot(),
  ]
})
export class DashboardModule { }
