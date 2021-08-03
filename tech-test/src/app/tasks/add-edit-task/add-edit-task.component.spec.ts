import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTaskComponent } from './add-edit-task.component';
import {SharedModule} from '../../shared/shared.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('AddEditTaskComponent', () => {
  let component: AddEditTaskComponent;
  let fixture: ComponentFixture<AddEditTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditTaskComponent ],
      imports:[SharedModule,HttpClientModule,RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should reset the form after click on reset button', () => {
    component.initializeNewTak();
    expect(component.selectedTask.label).toBe('');
    expect(component.selectedTask.description).toBe('');
    expect(component.selectedTask.category).toBe('');
    expect(component.selectedTask.done).toBe(false);
  });
});
