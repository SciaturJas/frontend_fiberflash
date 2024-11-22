import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DistritoComponent } from './pages/distrito/distrito.component';
import { UtilsRoutingModule } from './utils-routing.module';
import { ClientsComponent } from './pages/clients/clients.component';


@NgModule({
  declarations: [
    DistritoComponent,
    ClientsComponent
  ],
  imports: [
    CommonModule,
    // SharedModule,
    // NgxSpinnerModule,
    // DataTablesModule,
    // NgxDropzoneModule,
    // NgbModule,
    // FormsModule,
    // NgSelectModule,
    // NgxDropzoneModule,
    // ArchwizardModule,
    // NgxDocViewerModule,
    // ReactiveFormsModule,
    UtilsRoutingModule
  ]
})
export class UtilsModule { }
