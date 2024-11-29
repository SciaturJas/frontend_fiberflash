// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './auth/login/login.component';
// import { DistritoComponent } from './utils/pages/distrito/distrito.component';
// import { ClientsComponent } from './utils/pages/clients/clients.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
//   { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
//   { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
//   { path: 'supportive', loadChildren: () => import('./supportive/supportive.module').then(m => m.SupportiveModule) },
//   { path: 'onboarding', loadChildren: () => import('./onboarding/onboarding.module').then(m => m.OnboardingModule) },
//   {
//     path: 'distrito',
//     component: DistritoComponent
//   },
//   {
//     path: 'cliente',
//     component: ClientsComponent
//   },
// ];
  

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {AuthGuard} from "./shared/guard/auth.guard";
import { content } from './shared/routes/routes';
import { ContentLayoutComponent } from './shared/layout/content-layout/content-layout.component';

const routes: Routes = [
  { path: '', redirectTo:'auth/login', pathMatch: 'full'},
  {
    path:'', loadChildren: ()=> import('./authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [AuthGuard],
    children: content
  },
  {
    path: '',
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
