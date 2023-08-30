import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent {
  login!: any;

  constructor(private router : Router) { }
  ngOnInit() {
    // Récupérez la valeur du LocalStorage pour la clé 'login'
    this.login = localStorage.getItem('login');
  }
account(){
  this.router.navigate(['account']);
}

}
