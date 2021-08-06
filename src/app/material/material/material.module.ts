import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'

const MatComponent = [
  MatIconModule
]

@NgModule({
  imports: [MatComponent],
  exports: [MatComponent],
})
export class MaterialModule { }
