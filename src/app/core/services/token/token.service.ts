import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  keyName: string = 'access_token';

  constructor() { }

  get(): any{
    return localStorage.getItem(this.keyName);
  }

  clear(): void{
    localStorage.removeItem(this.keyName);
  }

  getDecodeToken(token: string): any{
    try {
      return jwt_decode(token);
    } catch (error) {
      console.log(error);
    }
  }

  // como se registrara en el Local Storage
  wrap(token: string): any{
    const payload = this.getDecodeToken(token);

    return JSON.stringify({
      name: 'jwt',
      createAt: new Date (payload.iat * 1000),
      expired: new Date (payload.exp * 1000),
      value: token
    });
  }

  set(token: string): void{
    localStorage.setItem(this.keyName, this.wrap(token));
  }

}
