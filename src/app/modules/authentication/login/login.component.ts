import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService , AuthenticationService]
})
export class LoginComponent {

  submitting = false;
  loginForm = this.formBuilder.group({
    matricule: new FormControl('', [Validators.required]),
    codeAuthentification: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private formBuilder: FormBuilder, private messageService: MessageService, private authService: AuthenticationService) { }

  // navigateTo() {
  //   this.router.navigate(['admin/accueil'])
  // }

  ngOnInit(): void {
  }

  login(): void{
    this.submitting = true;
    //appel de la requete du service
    this.authService.login({
      matricule : this.loginForm.value.matricule,
      mot_de_passe: this.loginForm.value.codeAuthentification
    }).toPromise().then((data:any) =>{
      this.submitting = false;
      this.messageService.add({
        severity: 'success',
        summary: 'Vous êtes connecté',
        detail: 'Bienvenue',
        life: 3000
      });
      console.log(data);

      this.router.navigate(['user/accueil'])
    },
    (res)=>{
      this.submitting = false;
      this.messageService.add({
        severity: 'error',
        summary: 'Vérifier votre login ou mot de passe ',
        detail: 'Réessayez',
        life: 3000
      });
      console.log(res);

      this.loginForm.value.matricule = "";
      this.loginForm.value.codeAuthentification = "";
    });
  }

  formPersonnel(){
    this.router.navigate(['auth/personnelLogin'])
  }
}
