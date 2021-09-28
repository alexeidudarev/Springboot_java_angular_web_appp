import { Component, OnInit } from '@angular/core';
//import { AppComponent } from '../app.component';

//decorator object creation 
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some welcome message'
  message2 : string = 'Some welcome message 2'

  constructor() { }

  ngOnInit(): void {
    console.log(this.message)
  }

}
export class Class1{

}
export class Class2{
  
}