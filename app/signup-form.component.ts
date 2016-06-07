import { Component } from '@angular/core';
import { Control, ControlGroup, Validators, FormBuilder } from '@angular/common';
@Component({
    selector: 'signup',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpComponent {
    // form=new ControlGroup({
    //     username: new Control('', Validators.required),
    //     password: new Control('', Validators.required),
    // });
    form: ControlGroup;
    constructor(fb: FormBuilder){
       this.form=fb.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
       });
    }
    signup(){
        console.log(this.form.value);
    }
}