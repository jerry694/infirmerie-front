import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthUserService } from '../services/auth-user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  user: User = new User();

  passwordVisible: boolean = false;
  login: any;
  loginForm!: FormGroup;
  submitted = false

  constructor(private authuserservice: AuthUserService, private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login:['',Validators.required],
      password:['',Validators.required]
    })
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  userAuth() {
    this.submitted=false
    // console.log(this.loginForm.value)//utiliser ca maintenant
    console.log(this.loginForm.valid)
    console.log(this.loginForm.controls['password'].errors)
    this.user = this.loginForm.value
    console.log(this.user)
    if(this.loginForm.invalid){
      return
    }
    this.authuserservice.authuser(this.user).subscribe(data => {
      console.log(data)
      this.login = data
      localStorage.setItem('id_infirmiere', this.login.id_infirmiere);
      localStorage.setItem('login', this.login.login);
      localStorage.setItem('token', this.login.token);
      this.route.navigate(["/page"]);
      alert("BIENVENUE ")
      console.log(localStorage.getItem)
    }, error => {
      // Gestion des erreurs lors de l'authentification.
      if (error.status === 404) {
        alert("Le login est incorrect. Veuillez vérifier vos informations de connexion.");
      } else {
        // this.route.navigate(["page"]);
        alert("Une erreur s'est produite lors de l'authentification. Veuillez réessayer plus tard.");
      }
    }
    );
  }
}


