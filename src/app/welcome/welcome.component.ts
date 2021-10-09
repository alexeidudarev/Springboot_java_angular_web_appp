import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { WelcomeDataService } from '../service/data/welcome-data.service';

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
  messageFromService!: string;

  constructor(
    private route:ActivatedRoute,
    private welcomeDataService:WelcomeDataService) { }

  ngOnInit(): void {
    //console.log(this.message)
    this.name = this.route.snapshot.params['name']
  }
  getWelcomeMessage(){
    console.log(this.welcomeDataService.executeHelloworldBeanService());
    this.welcomeDataService.executeHelloworldBeanService().subscribe(
        response => this.handlefullReponse(response.message),
        error => this.handlefullReponse(error.error.message)
        
    );
  }
  handlefullReponse(response: string){
    this.messageFromService = response
  }
}
export class Class1{

}
export class Class2{
  
}