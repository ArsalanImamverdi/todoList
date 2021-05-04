import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaksListsComponent } from './taks-lists/taks-lists.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MaterialModule } from '../shared/modules/material.module';
import { TasksComponent } from './tasks/tasks.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const component = [
  TaksListsComponent,
  TodoListComponent
]

@NgModule({
  declarations: [component, TasksComponent, TaskFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  exports: [component],
})
export class ComponentsModule { }
