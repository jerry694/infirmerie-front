// import { Constructor } from './../../../node_modules/@angular/cdk/schematics/update-tool/migration.d';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{

  constructor(private route: Router){}
  //navigate to login page
  navigateToLogin(){
    this.route.navigate(['auth/etudiantLogin'])
  }
  // fonction du responsive navbar
  responsive() {
    const menu: any = document.querySelector('.menu-icon');
    const navbar: any = document.querySelector('.menu');
    navbar.classList.toggle('active');
    menu.classList.toggle('move')
  }
  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }


  //Apparitions au defilement
  apparition() {
    const ratio = .1
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: ratio,
    }

    const handleIntersect = function (entries: any[], observer: { unobserve: (arg0: any) => void; }) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
          entry.target.classList.add('reveal-visible')
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, options)
    document.querySelectorAll('.reveal').forEach(function (s) {
      observer.observe(s)
    })
    document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
      observer.observe(r)
    })
  }

  ngOnInit(): void{

  }
}
