import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaksListsComponent } from './taks-lists/taks-lists.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TodoListComponent } from './todo-list/todo-list.component';

const component = [
  TaksListsComponent,
  TodoListComponent
]

@NgModule({
  declarations: [component],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [component]
})
export class ComponentsModule { }
