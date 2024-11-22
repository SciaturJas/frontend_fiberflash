import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceComponent } from './finance/finance.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LearningComponent } from './learning/learning.component';
import { NetworkComponent } from './network/network.component';
import { ProjectComponent } from './project/project.component';
import { SocialComponent } from './social/social.component';

const routes: Routes = [
  { path: 'finance', component: FinanceComponent },
  { path: 'home', component: HomeComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'learning', component: LearningComponent },
  { path: 'network', component: NetworkComponent },
  { path: 'social', component: SocialComponent },
  { path: 'project', component: ProjectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
