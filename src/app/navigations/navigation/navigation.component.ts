import { Component } from '@angular/core';
import { navItems } from './nav-items';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  navData = navItems

}
