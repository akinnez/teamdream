import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ViewsModule } from '../views/views.module';
import { MaterialModule } from '../material/material/material.module';
import { DefaultModule } from '../default/default/default.module';



@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[
    ButtonComponent,
  ]
})
export class ComponentsModule { }
