import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloworldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }
  //http://localhost:8080/hello-world-bean/path-variable/
  executeServiceWithPathVariable(message:string){
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/path-variable/${message}`);
  }
}
export class HelloWorldBean{
  constructor( public message:string){}
}
