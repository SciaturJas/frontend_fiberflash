import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SocialProfileComponent } from './social-profile/social-profile.component';
import { ProfessionalComponent } from './professional/professional.component';
import { AnalyticalComponent } from './analytical/analytical.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { LightboxModule } from 'ngx-lightbox';
import { ChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { OtherRoutingModule } from '../other/other-routing.module';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { BrandingComponent } from './branding/branding.component';
import { UserRolesComponent } from './user-roles/user-roles.component';
import { ResourcesComponent } from './resources/resources.component';
import { ManagementComponent } from './management/management.component';
import { CareerComponent } from './career/career.component';
import { DocumentComponent } from '../other/document/document.component';


@NgModule({
  declarations: [
    ProfileComponent,
    SocialProfileComponent,
    ProfessionalComponent,
    AnalyticalComponent,
    AccountSettingsComponent,
    CompanyProfileComponent,
    BrandingComponent,
    UserRolesComponent,
    ResourcesComponent,
    ManagementComponent,
    CareerComponent,
    DocumentComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    OtherRoutingModule,
    SwiperModule,
    LightboxModule,
    ChartsModule,
    NgCircleProgressModule,
  ]
})
export class ProfileModule { }
