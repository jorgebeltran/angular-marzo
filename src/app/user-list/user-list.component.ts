import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'practice-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  test:User={
    name:'gabriel',
    lastname:'meneces',
    username:'gabriel123',
    email:'gabrie@gmail.com',
  }

  constructor() { }

  ngOnInit() {
  }

}
