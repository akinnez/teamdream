import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material/material/material.module';
import { HomeComponent } from './home/home.component';
import { NitroComponent } from './nitro/nitro.component';
import { DownloadComponent } from './download/download.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, NitroComponent, DownloadComponent],
  imports: [CommonModule, ComponentsModule, MaterialModule],
  exports: [HeaderComponent, FooterComponent, HomeComponent,NitroComponent, DownloadComponent],
})
export class ViewsModule {}
