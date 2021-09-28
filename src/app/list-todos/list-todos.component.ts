import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos=[
    { id:1,descripption:'Learn to dance'},
    { id:2,descripption:'Learn to draw'},
    { id:3,descripption:'Learn to sing'},
    { id:4,descripption:'Learn to play'},
    { id:5,descripption:'Learn to jump'},
    { id:6,descripption:'Learn to drive'},
    { id:7,descripption:'Learn to create'}

]

  todo = { id:1,descripption:'Learn to dance'}

  constructor() { }

  ngOnInit(): void {
  }

}
