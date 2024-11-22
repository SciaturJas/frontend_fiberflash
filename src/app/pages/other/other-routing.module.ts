import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { DocumentComponent } from './document/document.component';
import { EarningComponent } from './earning/earning.component';
import { HelpcenterComponent } from './helpcenter/helpcenter.component';
import { PaymentComponent } from './payment/payment.component';
import { PersonalizeComponent } from './personalize/personalize.component';
import { PlanComponent } from './plan/plan.component';
import { StatementComponent } from './statement/statement.component';

const routes: Routes = [
  { path: 'helpcenter', component: HelpcenterComponent },
  { path: 'personalize', component: PersonalizeComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'earning', component: EarningComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'statement', component: StatementComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'document', component: DocumentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
