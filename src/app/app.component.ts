import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDo } from './models/to-do';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoList';
  formTask:ToDo = {} as ToDo;
  taskList:ToDo[] = [
    {task: "Wash Laundry", completed: true, duration: 0.5, priority: "Normal" },
    {task: "Take out garbage", completed: false, duration: 0.1, priority: "High" },
    {task: "Do dishes", completed: true, duration: 0.05, priority: "Low" },
    {task: "Dry laundry", completed: false, duration: 0.3, priority: "Normal" }];
  
  completeTask(t:ToDo):void{
    t.completed = true;
  }

  removeTask(t:ToDo):void{
    let index:number = this.taskList.findIndex(x => x === t);
    this.taskList.splice(index, 1);
  }

  addTask():void{
    this.formTask.completed = false;
    let result:ToDo = {...this.formTask};
    this.taskList.push(result);

    this.formTask = {} as ToDo;
  }
}
