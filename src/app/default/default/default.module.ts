import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { ViewsModule } from 'src/app/views/views.module';




@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    ViewsModule,
  ],
  exports:[
    DefaultComponent 
  ]
})
export class DefaultModule { }
