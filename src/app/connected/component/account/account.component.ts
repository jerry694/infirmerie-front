import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { InfirmiereService } from 'src/app/services/infirmiere.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  user: User = new User();

  passwordVisible: boolean = false;
  login: any;
  idInfirmiere:any
  loginForm!: FormGroup;
  similaire!:boolean

  constructor(private infirmiereService: InfirmiereService, private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
     this.idInfirmiere = localStorage.getItem('id_infirmiere');
    this.loginForm = this.formBuilder.group({
      login: [''],
      password: [''],
      confirmPassword: [''],

    })
    console.log(this.loginForm)
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  modifierPassword() {
    if (this.loginForm.value.password === this.loginForm.value.confirmPassword) {
      this.similaire = true
      this.user = this.loginForm.value
      console.log(this.user)
      this.infirmiereService.modifier(parseInt(this.idInfirmiere),this.loginForm.value.login,this.loginForm.value.password).subscribe(data => {
        console.log(data)
        localStorage.clear(); // Efface tout le contenu du LocalStorage
        this.route.navigate(['auth'])

      }, error => {
        console.log(error)
      }
      );
    }
    else{
      this.similaire=false
      alert("mot de passe different")
      alert(this.loginForm.value.password)
      alert(this.loginForm.value.confirmPassword)
    }

  }
}