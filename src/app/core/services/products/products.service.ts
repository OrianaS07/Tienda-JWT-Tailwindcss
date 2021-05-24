import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';

import {HttpClient} from '@angular/common/http';

import { environment } from './../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  // tslint:disable-next-line: typedef
  public getAllProducts(){
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }

  // tslint:disable-next-line: typedef
  public getProduct(id: string){
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  // tslint:disable-next-line: typedef
  public createProduct(product: Product){
    return this.http.post(`${environment.url_api}/products`,product);
  }

  public updateProduct(id: string, changes: Partial<Product>){
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }

  public deleteProduct(id: string){
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
}
