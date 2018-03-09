import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'practice-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userlist:User[]=[];

  constructor() { 
    this.userlist.push({
      name:'gabriel',
    lastname:'meneces',
    username:'gabriel123',
    email:'gabrie@gmail.com'
    });
    this.userlist.push({
      name:'gabriel1',
    lastname:'meneces',
    username:'gabriel123',
    email:'gabrie@gmail.com'
    });
      this.userlist.push({
      name:'gabriel2',
    lastname:'meneces',
    username:'gabriel123',
    email:'gabrie@gmail.com'
    });
  }

  ngOnInit() {
  }

}
