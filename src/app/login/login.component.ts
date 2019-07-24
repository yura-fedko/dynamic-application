import { Component, OnInit } from '@angular/core';
import { LOGIN } from '../data'
import { from } from 'rxjs';
import { FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = LOGIN;
  
  usernameControlStatus: any;
  passwordControlStatus: any;
  loginControl: FormGroup
  
  
  get usernameControl (){
    return this.loginControl.get('usernameControl')
  };

  get passwordControl () {
    return this.loginControl.get('passwordControl')
  }
  
   logInFn (usernameControl, passwordControl) {
    this.usernameControlStatus = usernameControl.invalid
    this.passwordControlStatus = passwordControl.invalid
    if(usernameControl.value == this.login.username && passwordControl.value == this.login.password){
      this.login.state = true
    }
  }

  logOutFn () {
    this.login.state = false
  }

  constructor() { }

  ngOnInit() {
     this.loginControl = new FormGroup({
      usernameControl: new FormControl ("application@gmail.com", [Validators.email,Validators.minLength(20), Validators.pattern('^.+@gmail.com$')]),
      passwordControl: new FormControl ("12345678910", [Validators.minLength(8), Validators.maxLength(16)])
    })
  }

}
