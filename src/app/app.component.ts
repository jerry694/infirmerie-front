import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  formGroups!: FormGroup ;

  ngOnInit() {
      this.formGroups = new FormGroup({
          city: new FormControl([null])
      });
  }

  aff(){
    console.log(this.formGroups)
  }
}




