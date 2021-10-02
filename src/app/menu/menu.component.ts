import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //isUserLoggedIn:boolean = false;
  public hardcodedAuthenticationService:HardcodedAuthenticationService;

  constructor(hardcodedAuthenticationService:HardcodedAuthenticationService) {
    this.hardcodedAuthenticationService = hardcodedAuthenticationService;
   }

  ngOnInit(): void {
    //this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}
