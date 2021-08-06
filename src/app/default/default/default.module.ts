import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DefaultHomeComponent } from './defaultHome.component';
import { ViewsModule } from 'src/app/views/views.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/material/material/material.module';
import { DefaultDownloadComponent } from '../default-download/default-download.component';




@NgModule({
  declarations: [
    DefaultHomeComponent,DefaultDownloadComponent
  ],
  imports: [
    CommonModule,
    ViewsModule,
    ComponentsModule,
    MaterialModule,
  ],
  exports:[
    DefaultHomeComponent,DefaultDownloadComponent
  ]
})
export class DefaultModule { }
