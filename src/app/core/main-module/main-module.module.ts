import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { WeAreComponent } from './we-are/we-are.component';
import { WeDoComponent } from './we-do/we-do.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MainModuleComponent } from './main-module.component';



@NgModule({
  declarations: [
    HomeComponent,
    WeAreComponent,
    WeDoComponent,
    GalleryComponent,
    ContactUsComponent,
    MainModuleComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class MainModuleModule { }
