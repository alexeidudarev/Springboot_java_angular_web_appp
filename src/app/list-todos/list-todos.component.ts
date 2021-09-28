import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos=[

    new Todo(1,'Learn to dance',false,new Date()),
    new Todo(2,'Learn to swim',false,new Date()),
    new Todo(3,'Learn to sing',false,new Date()),
    new Todo(4,'Learn to travel',false,new Date()),
    new Todo(5,'Learn to run',false,new Date()),
    new Todo(6,'Learn to jump',false,new Date()),
    new Todo(7,'Learn to scream',false,new Date()),

]

  ngOnInit(): void {
  }

}

export class Todo{
  constructor(
    public id :number,
    public description:string,
    public done:boolean,
    public targetDate:Date
    ){}
}