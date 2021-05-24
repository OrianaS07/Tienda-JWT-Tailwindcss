import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token/token.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor( private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let token: any = JSON.parse(this.tokenService.get());
    
    let req = request;

    if(token){
      req = request.clone({
        setHeaders: {
          authorization: `Bearer ${token.value}`,
        }
      });
    }
    return next.handle(req);
  }
}
