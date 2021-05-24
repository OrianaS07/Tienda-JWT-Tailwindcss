import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { environment } from './../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  // index
  public getAllUser(){
    return this.http.get<User[]>(`${environment.auth_url}users`);
  }

  // show
  public getUser(id: string){
    return this.http.get<User>(`${environment.auth_url}users/${id}`);
  }

  // store
  public createUser(user: User){
    return this.http.post(`${environment.auth_url}users`, user);
  }

  public updateUser(id: string, changes: Partial<User>){
    return this.http.put(`${environment.auth_url}users/${id}`,changes);
  }

  public deleteUser(id: string){
    return this.http.delete(`${environment.auth_url}users/${id}`);
  }
}
