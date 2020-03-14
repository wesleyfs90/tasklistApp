import { Component, OnInit } from '@angular/core';
import { TaskService } from './../shared/task.service';
import { Task } from './../shared/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {
  tasks: Task [] = [];

  constructor(private TaskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.TaskService.getAll();
  }

  delete(task: Task){
    this.TaskService.delete(task.id);
  }

}
