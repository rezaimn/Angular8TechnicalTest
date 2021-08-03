import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpService} from './sevices/http.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    HttpService
  ]
})
export class SharedModule { }
