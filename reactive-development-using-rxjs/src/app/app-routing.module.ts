import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { DocumentFormComponent } from './documents/document-form/document-form.component';
import { DocumentViewerComponent } from './documents/document.viewer.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'products',
        loadChildren: () =>
          import('./products/product.module').then(m => m.ProductModule)
      },
      {
        path: 'document',
        component: DocumentFormComponent,
        children: [
          {
            path: ':id',
            component: DocumentViewerComponent,
            pathMatch: 'full'
          }
        ]
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
