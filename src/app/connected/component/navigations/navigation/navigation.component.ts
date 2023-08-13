import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navItems } from './nav-items';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
// interface sideNav{
//   screenWidth:number;
// }
export class NavigationComponent implements OnInit {

//  @Output() screenW : EventEmitter<sideNav> = new EventEmitter;
// screenWidth:number | undefined;
  navData = navItems
  
  ngOnInit(): void {
    // this.screenWidth = window.innerWidth
  }
  effacerLocalStorage() {
    localStorage.clear(); // Efface tout le contenu du LocalStorage
  }
}

