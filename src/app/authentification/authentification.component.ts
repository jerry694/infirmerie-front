import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthUserService } from "../services/auth-user.service";
import { User } from "../user";
import { MessageService } from "primeng/api";
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
  gError: any;

  constructor(private authuserservice: AuthUserService, private route: Router, private formBuilder: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
    console.log(this.loginForm)
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  userAuth() {
    // console.log(this.loginForm.value)//utiliser ca maintenant
    // console.log(this.loginForm.valid)
    // console.log(this.loginForm.controls['password'].errors)
    this.user = this.loginForm.value
    console.log(this.user)
    this.authuserservice.authuser(this.user).subscribe(data => {
      console.log(data)
      this.login = data
      localStorage.setItem('id_infirmiere', this.login.idInfirmiere);
      localStorage.setItem('login', this.login.login);
      localStorage.setItem('token', this.login.token);
      // alert("BIENVENUE ")
      this.show("Vous avez ete connecte avec succes", "Connexion", "success")
      console.log(localStorage.getItem)
      setTimeout(() => {
        this.route.navigate(["connect/dashboard"]);
      }, 1000);
    }, error => {
      console.log(error)
      this.show("Erreur lors de la connexion", "Connexion", "error")
      this.gError = error.status
     
    }
    );
  }
  show(message: string, tete: string, type: string) {
    this.messageService.add({ severity: type, summary: tete, detail: message, icon: "pi pi-user-edit" });
  }

}


