import { Injectable } from '@angular/core';
import { CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  constructor(private router: Router) { }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // Votre logique d'authentification ici (par exemple, vérifier si l'utilisateur est connecté)
    // localStorage.setItem('token', this.login.token);

    if (localStorage.getItem('token')) {
      return true; // Autoriser l'accès aux routes enfants
    } else {
      // Rediriger vers une page d'authentification ou une autre page
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
