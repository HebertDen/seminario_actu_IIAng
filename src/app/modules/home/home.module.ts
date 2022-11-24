import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderhomeComponent } from './headerhome/headerhome.component';
import { FooterhomeComponent } from './footerhome/footerhome.component';
import { SectionhomeComponent } from './sectionhome/sectionhome.component';
import { AsidebarhomeComponent } from './asidebarhome/asidebarhome.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderhomeComponent,
    FooterhomeComponent,
    SectionhomeComponent,
    AsidebarhomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
