import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModuleComponent } from './share-module.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
const routes: Routes = [
  { path: '', component: ShareModuleComponent },
  // { path: 'header', component: HeaderComponent },
  // { path: 'footer', component: FooterComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareModuleRoutingModule { }
