import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ProductResolved } from './product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<ProductResolved> {


  constructor(private productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductResolved> {
    const id = route.paramMap.get('id');
    if ( isNaN(Number(id)) ) {
      const message = `Product id was not a number: ${id}`;
      return of({product: null, error: message});
    }
    return this.productService.getProduct(Number(id))
    .pipe(
      map(product => ({product})),
      catchError(err => of({product: null, error: `Retrieval error: ${err}`}))
    );
  }
}
