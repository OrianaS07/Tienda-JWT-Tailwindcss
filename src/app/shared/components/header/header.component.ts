import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {CartService} from './../../../core/services/cart/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //total = 0;
  total$!: Observable<number>;

  constructor(
    private cartService: CartService
  ) {
    // ---- SIN UTILIZAR PIPES -------
    /*this.cartService.cart$.subscribe(products => {
      console.log(products);
      this.total = products.length;
    });  */

    // tslint:disable-next-line: comment-format
    //------ Utilizando los Pipes y subscripción -----
    /*this.cartService.cart$
    .pipe(
      map(products => products.length)
    )
    .subscribe( products => {
      this.total = products;
    });*/

    // Utilizando total como un observable y la suscripcion desde html
    this.total$ = this.cartService.cart$
    .pipe(
      map(products => products.length)
    );
  }

  ngOnInit(): void {
  }

}
