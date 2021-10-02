import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username:string,password:string):boolean{
    if(username === "admin" && password === "1234"){
      sessionStorage.setItem('authenticaterUser',username)
      return true;
    }
    return false;
  }
  isUserLoggedIn():boolean{
    let user  = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }
  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }
}
