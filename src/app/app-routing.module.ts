import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DistritoComponent } from './utils/pages/distrito/distrito.component';
import { ClientsComponent } from './utils/pages/clients/clients.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'supportive', loadChildren: () => import('./supportive/supportive.module').then(m => m.SupportiveModule) },
  { path: 'onboarding', loadChildren: () => import('./onboarding/onboarding.module').then(m => m.OnboardingModule) },
  {
    path: 'distrito',
    component: DistritoComponent
  },
  {
    path: 'cliente',
    component: ClientsComponent
  },
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
