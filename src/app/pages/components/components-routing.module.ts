import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { ComponentsComponent } from './components.component';
import { EventsComponent } from './events/events.component';
import { FilesComponent } from './files/files.component';
import { FormsComponent } from './forms/forms.component';
import { NewsComponent } from './news/news.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProgressComponent } from './progress/progress.component';
import { RatingsComponent } from './ratings/ratings.component';
import { SummaryComponent } from './summary/summary.component';
import { UserComponent } from './user/user.component';
import { WizardsComponent } from './wizards/wizards.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      { path: 'cards', component: CardsComponent },
      { path: 'events', component: EventsComponent },
      { path: 'files', component: FilesComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'news', component: NewsComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'ratings', component: RatingsComponent },
      { path: 'summary', component: SummaryComponent },
      { path: 'users', component: UserComponent },
      { path: 'wizards', component: WizardsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
