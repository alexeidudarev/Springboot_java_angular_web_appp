import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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
  private router : Router
  private hardcodedAuthenticationService : HardcodedAuthenticationService


  constructor(router:Router,hardcodedAuthenticationService:HardcodedAuthenticationService) 
  { 
    this.router = router 
    this.hardcodedAuthenticationService = hardcodedAuthenticationService;
  }

  ngOnInit(): void {

  }
  handleLogin(){
    //if(this.username === "admin" && this.password === "1234"){
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }
  }
}
