import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errorMessage='Inavlid credentials'
  invalidLogin=false

  constructor() { }

  ngOnInit(): void {

  }
  handleLogin(){
    if(this.username === "admin" && this.password === "1234"){
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }
  }
}
