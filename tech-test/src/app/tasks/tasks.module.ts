import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksComponent} from './tasks.component';
import {AddEditTaskComponent} from './add-edit-task/add-edit-task.component';
import {TasksRoutingModule} from './tasks-routing.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    TasksComponent,
    AddEditTaskComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule
  ]
})
export class TasksModule {
}
