import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModuleRoutingModule } from './share-module-routing.module';
import { ShareModuleComponent } from './share-module.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    ShareModuleComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ShareModuleRoutingModule
  ],
  exports:[HeaderComponent,FooterComponent]
})
export class ShareModuleModule { }
