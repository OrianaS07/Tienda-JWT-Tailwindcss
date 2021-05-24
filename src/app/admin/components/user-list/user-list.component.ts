import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../core/services/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users = [];

  displayedColumns: string[] = ['id','name', 'email','actions']; 

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(){
    this.userService.getAllUser()
      .subscribe((users:any) => {
        
        this.users = users;
        console.log(this.users);
      });
  }

  deleteUser(id: string){
    this.userService.deleteUser(id)
      .subscribe( respose => {
        this.fetchUsers();
      })
  }

}
