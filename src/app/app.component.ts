import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'infirmeriefront';
  date: Date | undefined;
  
 
  @Output() 
  recherche!: string

  @Input()
  precherche!:string

}
