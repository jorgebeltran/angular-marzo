import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { User } from "../model/user";

@Injectable()
export class UserService {

  constructor(private httpclient:HttpClient) { //una inyencion 
   }
   getUserList():User[]{   //
     let userlist:User[]=[];

     userlist.push({
      name:'gabriel',
    lastname:'meneces',
    username:'gabriel123',
    email:'gabrie@gmail.com'
    });
    userlist.push({
      name:'gabriel1',
    lastname:'meneces',
    username:'gabriel123',
    email:'gabrie@gmail.com'
    });
      userlist.push({
      name:'gabriel2',
    lastname:'meneces',
    username:'gabriel123',
    email:'gabrie@gmail.com'
    });
    return userlist;
   }

}
