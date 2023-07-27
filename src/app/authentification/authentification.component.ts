import { Component } from '@angular/core';
import { User } from '../user';
import { AuthUserService } from '../services/auth-user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent {
  user: User = new User();

  passwordVisible: boolean = false;
  login: any;
 // responsedata: any;

  constructor(private authuserservice: AuthUserService, private route: Router) { }
 /* proceedlogin() {
    if (this.login.valid) {
      this.authuserservice.proceedlogin(this.login.value).subscribe(result => console.log(result)
      )
    }
  }*/
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  userAuth() {
    console.log(this.user)
    this.authuserservice.authuser(this.user).subscribe(data => {
      console.log(data)
      this.login=data
      localStorage.setItem('id_infirmiere', this.login.id_infirmiere);
      localStorage.setItem('token', this.login.token);
      localStorage.setItem('login', this.login.login);
      this.route.navigate(["/page"]);
      alert("BIENVENUE ")
      console.log(localStorage.getItem)
    },  error => {
      // Gestion des erreurs lors de l'authentification.
      if (error.status === 404) {
        alert("Le login est incorrect. Veuillez vérifier vos informations de connexion.");
      } else {
        alert("Une erreur s'est produite lors de l'authentification. Veuillez réessayer plus tard.");
      }
    }
  );
}
}


