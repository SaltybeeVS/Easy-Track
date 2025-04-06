import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component'
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.services';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!: string;
  @Input({required:true}) name:string | undefined;
  showComponent = false;
  
  constructor (private taskService: TasksService){}

  get selectedUserTasks(){
    return this.taskService.getUserTasks(this.userId);
  }
  
  onAddTask(taskData: NewTaskData){
    this.showComponent = false;
  }

}
