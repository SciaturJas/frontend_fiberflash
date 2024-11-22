import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { CardsComponent } from './cards/cards.component';
import { FormsComponent } from './forms/forms.component';
import { EventsComponent } from './events/events.component';
import { FilesComponent } from './files/files.component';
import { SummaryComponent } from './summary/summary.component';
import { NewsComponent } from './news/news.component';
import { RatingsComponent } from './ratings/ratings.component';
import { UserComponent } from './user/user.component';
import { ProgressComponent } from './progress/progress.component';
import { PricingComponent } from './pricing/pricing.component';
import { WizardsComponent } from './wizards/wizards.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ChartsModule } from 'ng2-charts';
import { SwiperModule } from 'swiper/angular';
import { NgWizardModule } from 'ng-wizard';


@NgModule({
  declarations: [
    ComponentsComponent,
    CardsComponent,
    FormsComponent,
    EventsComponent,
    FilesComponent,
    SummaryComponent,
    NewsComponent,
    RatingsComponent,
    UserComponent,
    ProgressComponent,
    PricingComponent,
    WizardsComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    NgxDropzoneModule,
    NgCircleProgressModule,
    ChartsModule,
    SwiperModule,
    NgWizardModule

  ]
})
export class ComponentsModule { }
