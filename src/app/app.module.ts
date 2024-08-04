import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModuleModule } from './core/share-module/share-module.module';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModuleModule
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
