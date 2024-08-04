import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { WeAreComponent } from './we-are/we-are.component';
import { WeDoComponent } from './we-do/we-do.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule, Routes } from '@angular/router';
import { MainModuleComponent } from './main-module.component';
import { SliderComponent } from './slider/slider.component';
import { WorkWithUsComponent } from './work-with-us/work-with-us.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: MainModuleComponent },
  { path: 'we-Are', component: WeAreComponent },
  { path: 'we-Do', component: WeDoComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact-Us', component: ContactUsComponent },
  // { path: 'footer', component: FooterComponent },

];



@NgModule({
  declarations: [
    HomeComponent,
    WeAreComponent,
    WeDoComponent,
    GalleryComponent,
    ContactUsComponent,
    MainModuleComponent,
    SliderComponent,
    WorkWithUsComponent,
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA], 

})
export class MainModuleModule { }
