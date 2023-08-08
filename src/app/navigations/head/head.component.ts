import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent {
  login!: any;

  constructor() { }
  ngOnInit() {
    // Récupérez la valeur du LocalStorage pour la clé 'login'
    this.login = localStorage.getItem('login');
  }

  @Input()
  message!: string;

}
