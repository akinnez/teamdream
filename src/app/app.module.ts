import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { DefaultModule } from './default/default/default.module';
import { ViewsModule } from './views/views.module';
import { MaterialModule } from './material/material/material.module';
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  declarations: [AppComponent, LandingPageComponent],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    ViewsModule,
    MaterialModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
