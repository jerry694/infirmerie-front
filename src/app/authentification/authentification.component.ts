import { Component } from '@angular/core';
import {User} from'../user';
import { AuthUserService } from '../auth-user.service';
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent {
  user:User=new User();

  passwordVisible: boolean = false;

  constructor(private authuserservice: AuthUserService ){}


  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  userAuth(){
    console.log(this.user)
    this.authuserservice.authuser(this.user).subscribe(data=>{
      alert("BIENVENUE")
    },Error=>alert("erreur"));
  }
}
