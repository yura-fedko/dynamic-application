import { Component, OnInit } from '@angular/core';
import { post } from 'selenium-webdriver/http';
import { LOGIN } from '../data'
import { from } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
  login = LOGIN;
  task: object;
  index: number;
  selectTask: object;
  comments: object;
  id: number = 0;
  tasks=[];

  setStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  parseStorage() {
    let t = JSON.parse(localStorage.getItem('tasks'))
    return t
  }

  addTask(task) {
    if (task !== "") {
      this.tasks.push({title: task, comments:[]})
      this.setStorage ()
    }
  }
  
  deleteTask(task) {
    let a = this.tasks.indexOf(task)
    if (a == this.id) {
      this.index=0
    }
    this.tasks.splice(this.tasks.indexOf(task), 1)
    this.setStorage ()
  }

  addComment(component) {
    if (component !== "" && this.login.state == true){
      this.tasks[this.index-1].comments.push({comment: component})
      this.setStorage()
      }
  }

  onSelect(task) {
    this.selectTask = task
    this.id = this.tasks.indexOf(task)
    this.index = this.tasks.indexOf(task)+1
    this.task = this.tasks[this.id]
    this.comments = this.tasks[this.id].comments
  }
  
  constructor() { }

  ngOnInit() {
    if (this.parseStorage() !== null){
    this.tasks = this.parseStorage()
    }
  }
}
