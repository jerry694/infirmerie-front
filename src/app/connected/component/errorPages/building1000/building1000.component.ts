import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-building1000',
  templateUrl: './building1000.component.html',
  styleUrls: ['./building1000.component.scss']
})
export class Building1000Component implements OnInit{
constructor(private router:Router){}
  ngOnInit(): void {
    setTimeout(() => {
    this.router.navigate(["dashboard"]);
  }, 2000);
  }

}
