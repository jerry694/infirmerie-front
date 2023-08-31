import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { configurationBase } from './configurationBase';

@Injectable({
  providedIn: 'root'
})
export class InfirmiereService {

  private baseUrl = `${configurationBase.baseUrl}`;
  private accessToken = localStorage.getItem('token');
  private httpOptions : any ={
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    })
  };
  constructor(private httpClient: HttpClient) { }
    // 
    modifier(idInfirmiere:number,newLogin:string,newPassword:string){
      const params = {newLogin,newPassword};
      console.log(params)
      return this.httpClient.delete(`${this.baseUrl}Modifier/Indentifiant/${idInfirmiere}`, { params, ...this.httpOptions });
      // return this.httpClient.put(`${this.baseUrl}`);
    }
}
