import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { retry } from 'rxjs/operators';

import { MessageService } from '../../messages/message.service';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.sass']
})
export class ProductEditComponent implements OnInit {
  pageTitle = 'Product Edit';
  errorMessage = '';
  dataIsValid: {[key: string]: boolean} = {};
  private currentProduct: Product | null = null;
  private originalProduct: Product | null = null;

  get product(): Product | null {
    return this.currentProduct;
  }

  set product(value: Product | null) {
    this.currentProduct = value;
    this.originalProduct = value && { ...value };
  }

  get isDirty(): boolean {
    return JSON.stringify(this.originalProduct) !== JSON.stringify(this.currentProduct);
  }

  constructor(private productService: ProductService,
              private messageService: MessageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
        const resolvedData = data.resolvedData;
        this.errorMessage = resolvedData.error;
        this.onProductRetrieved(resolvedData.product);
      });
  }

  onProductRetrieved(product: Product): void {
    this.product = product;

    if (!this.product) {
      this.pageTitle = 'No product found';
    } else {
      if (this.product.id === 0) {
        this.pageTitle = 'Add Product';
      } else {
        this.pageTitle = `Edit Product: ${this.product.productName}`;
      }
    }
  }

  deleteProduct(): void {
    if (this.product?.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete(`${this.product.productName} was deleted`);
    } else {
      if (confirm(`Really delete the product: ${this.product?.productName}?`) && this.product) {
        this.productService.deleteProduct(this.product.id).subscribe({
          next: () => this.onSaveComplete(`${this.product?.productName} was deleted`),
          error: err => this.errorMessage = err
        });
      }
    }
  }

  isValid(path?: string): boolean {
    console.log('Is valid invoked :: ', path);
    this.validate();
    if (path) {
      return this.dataIsValid[path];
    }
    return (this.dataIsValid && Object.keys(this.dataIsValid).every(key => this.dataIsValid[key]));
  }

  saveProduct(): void {
    if (this.isValid()) {
      if (this.product?.id === 0) {
        this.productService.createProduct(this.product).subscribe({
          next: () => this.onSaveComplete(`The new ${this.product?.productName} was saved`),
          error: err => this.errorMessage = err
        });
      } else if(this.product) {
         this.productService.updateProduct(this.product).subscribe({
          next: () => this.onSaveComplete(`The updated ${this.product?.productName} was saved`),
          error: err => this.errorMessage = err
        });
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  reset(): void {
    this.dataIsValid = {};
    this.currentProduct = null;
    this.originalProduct = null;
  }

  onSaveComplete(message?: string): void {
    if (message) {
      this.messageService.addMessage(message);
    }
    this.reset();
    this.router.navigate(['/products']);
  }

  validate(): void {
    console.log('validation form -------');
    this.dataIsValid = {};

    if (this.product?.productName &&
      this.product.productName.length >= 3 &&
      this.product.productCode) {
      this.dataIsValid['info'] = true;
    } else {
      this.dataIsValid['info'] = false;
    }

    if (this.product?.category &&
      this.product?.category.length >= 3) {
        this.dataIsValid['tags'] = true;
    } else {
      this.dataIsValid['tags'] = false;
    }
  }
}
