// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { SwiperModule } from 'swiper/angular';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ChartsModule } from 'ng2-charts';
// import { Daterangepicker } from 'ng2-daterangepicker';
// import { NgCircleProgressModule } from 'ng-circle-progress';
// import { JustLightboxModule } from 'just-lightbox';
// import { LightboxModule } from 'ngx-lightbox';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
// import { TagifyModule } from 'ngx-tagify';
// import { NgxDropzoneModule } from 'ngx-dropzone';
// import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
// import { PersonalizationService } from './shared/services/personalization.service';
// import { AuthenticationService } from './shared/services/authentication.service';
// import { CajasComponent } from './utils/pages/cajas/cajas.component';
// import { ClientsComponent } from './utils/pages/clients/clients.component';
// import { DistritoComponent } from './utils/pages/distrito/distrito.component';
// import { OnusComponent } from './utils/pages/onus/onus.component';
// import { PlansComponent } from './sales/pages/plans/plans.component';
// import { ServicesComponent } from './sales/pages/services/services.component';
// import { StateSalesComponent } from './sales/pages/state-sales/state-sales.component';
// import { SalesComponent } from './sales/pages/sales/sales.component';
// import { StatesAveriasComponent } from './tecnic/pages/states-averias/states-averias.component';
// import { AveriasComponent } from './tecnic/pages/averias/averias.component';
// import { ActivitiesComponent } from './admin/pages/activities/activities.component';
// import { HttpClientModule } from '@angular/common/http';
// import { ClientsService } from './utils/services/clients.service';
// import { CommonModule } from '@angular/common';


// const ngWizardConfig: NgWizardConfig = {
//   theme: THEME.default
// };

// @NgModule({
//   declarations: [
//     AppComponent,
//     CajasComponent,
//     // ClientsComponent,
//     // DistritoComponent,
//     OnusComponent,
//     PlansComponent,
//     ServicesComponent,
//     StateSalesComponent,
//     SalesComponent,
//     StatesAveriasComponent,
//     AveriasComponent,
//     ActivitiesComponent,
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     AppRoutingModule,
//     SwiperModule,
//     FormsModule,
//     ReactiveFormsModule,
//     ChartsModule,
//     Daterangepicker,
//     NgCircleProgressModule.forRoot(),
//     JustLightboxModule.forRoot(),
//     LightboxModule,
//     CKEditorModule,
//     TagifyModule.forRoot(),
//     NgxDropzoneModule,
//     NgWizardModule.forRoot(ngWizardConfig),
//   ],
//   providers: [PersonalizationService, AuthenticationService, ClientsService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { ColorPickerService } from 'ngx-color-picker';
import {AngularFireModule} from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import{TokenInterceptor} from "./shared/interceptor/token.interceptor"
import {TokenInterceptorLOGIN} from "./interceptor/token.interceptor";
import { DataTablesModule } from 'angular-datatables';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSpinnerModule } from "ngx-spinner";
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgSelectModule,
    NgxSpinnerModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
    }),
    DataTablesModule,
    NotifierModule
  ],
  providers: [
    ColorPickerService,
    {provide: HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass:TokenInterceptorLOGIN, multi:true}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
