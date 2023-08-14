import { Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form!: FormGroup
  list=['checkArray','antArray']
  Data: Array<any> = [
    { name: 'aa', value: '1' },
    { name: 'bb', value: '2' },
    { name: 'cc', value: '3' },
    { name: 'dd', value: '4' },
    { name: 'ee', value: '5' },
  ]
  ant: Array<any> = [
    { name: 'gg', value: '1' },
    { name: 'kk', value: '2' },
    { name: 'rr', value: '3' },
    { name: 'xx', value: '4' },
    { name: 'cc', value: '5' },
  ]
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      login:['',Validators.required],
      checkArray: this.formBuilder.array([], [Validators.required]),
      antArray: this.formBuilder.array([], [Validators.required])
    })
  }
  onCheckboxChange(e: any,check:string) {
    const checkArray: FormArray = this.form.get(check) as FormArray
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value))
    } else {
      let i: number = 0
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value){
          checkArray.removeAt(i)
        return
        }
        i++
      })
    }
  }
  onCheckboxChangeAnt(e: any,check:string) {
    const checkArray: FormArray = this.form.get(check) as FormArray
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value))
    } else {
      let i: number = 0
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value){
          checkArray.removeAt(i)
        return
        }
        i++
      })
    }
  }


  submitForm(){
    console.log(this.form.value)
    console.log(this.Data)
  }
  ngOnInit() {

  }
}




