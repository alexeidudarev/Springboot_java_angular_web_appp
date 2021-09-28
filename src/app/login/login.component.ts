import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  router : Router


  constructor(router:Router) { this.router = router }

  ngOnInit(): void {

  }
  handleLogin(){
    if(this.username === "admin" && this.password === "1234"){
      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }
  }
}
