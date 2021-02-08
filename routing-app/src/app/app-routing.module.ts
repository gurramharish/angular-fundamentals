import { NgModule } from '@angular/core';

import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { SelectivePreloadingStrategy } from './selective-preloading.service';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'products',
    canActivate: [AuthGuard],
    loadChildren: () => import('./products/product.module').then(m => m.ProductModule),
    data: { preload: true }
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: SelectivePreloadingStrategy})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
