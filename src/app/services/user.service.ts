import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {
  myhttpclient:HttpClient; //inyectar median el constructor
  constructor(inserthttpclient:HttpClient) {
    this.myhttpclient=inserthttpclient
   }

}
