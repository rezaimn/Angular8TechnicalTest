import {Component, OnInit} from '@angular/core';
import {Categories} from '../../shared/constants/categories.const';
import {TaskModel} from '../../shared/models/task.model';
import {ActivatedRoute, Router, RouterStateSnapshot} from '@angular/router';
import {HttpService} from '../../shared/sevices/http.service';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.scss']
})
export class AddEditTaskComponent implements OnInit {

  categoriesList = Categories;
  selectedTask: TaskModel;

  constructor(
    private httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.router.url.includes('edit')) {
      this.activatedRoute.params.subscribe(params => {
        const id = params['id'];
        this.httpService.get(`tasks/${id}`).subscribe(task => this.selectedTask = task);
      });
    } else {
      this.initializeNewTak();
    }
  }

  initializeNewTak() {
    this.selectedTask = {
      id: this.selectedTask ? this.selectedTask.id : 0,
      done: false,
      label: '',
      category: '',
      description: ''
    }
  }

  onSubmit() {
    if (this.selectedTask.id === 0) {
      this.httpService.post('tasks', this.selectedTask).subscribe(res => {
        this.router.navigate(['/tasks']);
      })
    } else {
      this.httpService.patch(`tasks/${this.selectedTask.id}`, this.selectedTask).subscribe(res => {
        this.router.navigate(['/tasks']);
      })
    }
  }
}
