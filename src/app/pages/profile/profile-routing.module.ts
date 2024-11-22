import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { AnalyticalComponent } from './analytical/analytical.component';
import { BrandingComponent } from './branding/branding.component';
import { CareerComponent } from './career/career.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { ManagementComponent } from './management/management.component';
import { ProfessionalComponent } from './professional/professional.component';
import { ResourcesComponent } from './resources/resources.component';
import { SocialProfileComponent } from './social-profile/social-profile.component';
import { UserRolesComponent } from './user-roles/user-roles.component';

const routes: Routes = [
  { path: 'account-settings', component: AccountSettingsComponent },
  { path: 'analytical', component: AnalyticalComponent },
  { path: 'professional', component: ProfessionalComponent },
  { path: 'social-profile', component: SocialProfileComponent },
  { path: 'companyprofile', component: CompanyProfileComponent },
  { path: 'branding', component: BrandingComponent },
  { path: 'userroles', component: UserRolesComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'career', component: CareerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
