import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';

//decorator object creation 
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some welcome message'
  message2 : string = 'Some welcome message 2'
  name = ''

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.message)
    this.name = this.route.snapshot.params['name']
  }

}
export class Class1{

}
export class Class2{
  
}