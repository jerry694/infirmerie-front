import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
  private baseUrl="http://localhost:8080/login"

  constructor(private httpClient:HttpClient) {}
  proceedlogin(usercred:any){
    return this.httpClient.post(this.baseUrl,usercred)
  }
  authuser(user: User):Observable<object>{
    console.log(user)
    return this.httpClient.post(`${this.baseUrl}`,user);
  }
}
