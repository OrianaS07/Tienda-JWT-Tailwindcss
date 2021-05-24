import { Pipe, PipeTransform } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Product } from 'src/app/core/models/product.model';

@Pipe({
  name: 'cart'
})
export class CartPipe implements PipeTransform {

  products!: Product[];

  constructor(
    private cartService: CartService
  ){}

  transform(product: any, args?: any): any {
    let total = 0;

    this.cartService.cart$.subscribe( products => {
      products.forEach((elemento) => {
        if (elemento.id === product.id){
          total += 1;
        }
      });
    });
    return total;
  }

}
