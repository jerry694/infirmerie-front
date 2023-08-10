import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name = 'Angular 6';
  formg!: FormGroup ;

  formGroup: FormGroup | undefined;

  ngOnInit() {
      this.formGroup = new FormGroup({
          city: new FormControl<string | null>(null)
      });
  }

  // constructor(private fb: FormBuilder) {
  //   this.portFilterForm();
  // }





  selectedCategories: any[] = [];

    categories: any[] = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
}
