import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs/';
import { map, catchError } from 'rxjs/operators';

import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  baseUrl: string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }
  /**
   * 
   */
  public getProducts(): Observable<Product[]> {
    return this.httpClient
    .get(this.baseUrl + '/products')
    .pipe(
      map((products: Product[]) => {
        return products.map((product) => new Product(product))  
      }),
      catchError((err) => {
        console.log('Handling error locally and rethrowing it...', err);
        return throwError(err);
      }), 
    );
  }
  /**
   * 
   */
  public createProducts(product: Product) {
    return this.httpClient
    .post(this.baseUrl + '/products', product)
    .pipe(
      map(response => {
        return new Product(response);
      }),
      catchError((err) => {
        console.log('Handling error locally and rethrowing it...', err);
        return throwError(err);
      })
    );
  }
  /**
   * 
   */
  public getProductById(productId: number) {
    return this.httpClient
    .get(this.baseUrl + '/products/' + productId)
    .pipe(
      map(response => {
        return new Product(response);
      }),
      catchError((err) => {
        console.log('Handling error locally and rethrowing it...', err);
        return throwError(err);
      })
    );
  }
  /**
   * 
   */
  public updateProduct(product: Product) {
    return this.httpClient
    .put(this.baseUrl + '/products/' + product.id, product)
    .pipe(
      map(response => {
        return new Product(response);
      }),
      catchError((err) => {
        console.log('Handling error locally and rethrowing it...', err);
        return throwError(err);
      })
    );
  }
  /**
   * 
   */
  public deleteProductById(productId: number) {
    return this.httpClient
    .delete(this.baseUrl + '/products/' + productId)
    .pipe(
      catchError((err) => {
        console.log('Handling error locally and rethrowing it...', err);
        return throwError(err);
      })
    );
  }

}
