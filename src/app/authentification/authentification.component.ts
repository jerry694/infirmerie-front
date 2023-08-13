import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthUserService } from "../services/auth-user.service";
import { User } from "../user";
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss'],
  
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
      localStorage.setItem('id_infirmiere', this.login.idInfirmiere);
      localStorage.setItem('login', this.login.login);
      localStorage.setItem('token', this.login.token);
      this.route.navigate(["/connected/dashboard"]);
      alert("BIENVENUE ")
      console.log(localStorage.getItem)
      console.log(this.route)
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


