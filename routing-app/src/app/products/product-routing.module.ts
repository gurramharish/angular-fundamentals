import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditInfoComponent } from './product-edit/product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit/product-edit-tags.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list.component';
import { ProductResolver } from './product-resolver.service';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    resolve: { resolvedData: ProductResolver } },
  {
    path: 'products/:id/edit',
    component: ProductEditComponent,
    resolve: { resolvedData: ProductResolver },
    children: [
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full'
      },
      {
        path: 'info',
        component: ProductEditInfoComponent
      },
      {
        path: 'tags',
        component: ProductEditTagsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
