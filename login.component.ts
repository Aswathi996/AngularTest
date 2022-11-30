import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Login!: FormGroup;
  submitted!:boolean;

  constructor(private formBuilder: FormBuilder) { }

  validateEmail(c: FormControl): any {
    let EMAIL_REGEXP = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return EMAIL_REGEXP.test(c.value) ? null : {
      emailInvalid: {
        message: "Invalid Format!"
      }
    };
  }
  ngOnInit() {
    this.Login = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', this.validateEmail]
    });
  }


}
