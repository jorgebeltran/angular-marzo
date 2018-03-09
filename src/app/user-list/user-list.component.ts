import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'practice-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userlist: User[] = [];

  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.userlist = this.userservice.getUserList();
  }

}
