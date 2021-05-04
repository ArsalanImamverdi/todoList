import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodoListHttpInterceptor } from './services/todo-list.interceptor';
import { UsersService } from './services/users.service';
import { TasksService } from './services/tasks.service';
import { TagsService } from './services/tags.service';
import { ColorsService } from './services/colors.service';
import { TaskListsService } from './services/task-lists.service';
import { ComponentsModule } from './components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedComponentsModule } from './shared/components/shared-components.module';
import { MaterialModule } from './shared/modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    BrowserAnimationsModule,
    SharedComponentsModule,
    MaterialModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TodoListHttpInterceptor, multi: true }, UsersService, TasksService, TagsService, ColorsService, TaskListsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
