import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  tasks: any[] = [];

  constructor(private taskService: TaskService) {
    this.getData()
  }

  getData() {
    this.taskService.getAllTasks().subscribe((res) => (this.tasks = res));
  }

  addTask(title: string, description: string, completed: boolean) {
    let task = { title, description, completed };
    this.taskService.createTask(task).subscribe((res) => this.getData());
  }

  delTask(id:number){
    this.taskService.deleteTask(id).subscribe((res) => this.getData());
  }

  updTask(id:number,title: string, description: string, completed: boolean){
        let task = { title, description, completed };
        this.taskService.updateTask(id,task).subscribe((res) => this.getData());
  } 
}
