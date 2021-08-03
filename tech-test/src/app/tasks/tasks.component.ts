import {Component, OnInit} from '@angular/core';
import {HttpService} from '../shared/sevices/http.service';
import {TaskModel} from '../shared/models/task.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  todoList: TaskModel[] = [];

  constructor(private httpService: HttpService,
              private router: Router) {
  }

  ngOnInit() {
    this.getAllTasks();
  }

  addNewTaskPage() {
    this.router.navigate(['tasks/add']);
  }

  getAllTasks() {
    this.httpService.get('tasks').subscribe(tasks => this.todoList = tasks);
  }

  showEditPage(id:number){
    this.router.navigate([`tasks/edit/${id}`]);
  }
  /*
  TODO
  //should add a modal for delete confirmation
   */
  deleteTask(id:number,index:number){
    this.httpService.delete(`tasks/${id}`).subscribe(res=>{
      if(res){
        this.todoList.splice(index,1);
      }
    })
  }
}
