import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'share_module', loadChildren: () => import('./core/share-module/share-module.module').then(m => m.ShareModuleModule) },
  { path: 'main_module', loadChildren: () => import('./core/main-module/main-module.module').then(m => m.MainModuleModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
