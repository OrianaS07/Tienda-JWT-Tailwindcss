import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { UserLogin } from '../../models/userLogin.model';
import { TokenService } from '../token/token.service';
import { environment } from './../../../../environments/environment';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  register(user: User): Observable<any>{
    const url = environment.auth_url + 'register';
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(url, user, {headers}).pipe(
      map((response: any) => {
        // console.log(response.token);
       if (response.token){
          this.tokenService.set(response.token);
        }
      }));
  }

  login(user: UserLogin): Observable<any>{
    const url = environment.auth_url + 'login';

    return this.http.post(url, user).pipe(
      map((response:any) => {
        if (response.token){
          this.tokenService.set(response.token);
        }
      })
    );
  }

  logout(): void{
    this.tokenService.clear();
  }

  check(): any{
    return this.tokenService.get();
  }

}
