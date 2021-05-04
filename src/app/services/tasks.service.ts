import { Injectable } from "@angular/core";
import { BaseService } from "./base-service";
import { HttpClient } from "@angular/common/http";
import { ToDoListService } from "./todo-list.decorator";
import { TaskController } from "./controllers/tasks.controller";

@Injectable({ providedIn: 'root' })
@ToDoListService(builder => builder.name('tasks').controllerType(TaskController))
export class TasksService extends BaseService<TasksService> {

    constructor(protected http: HttpClient) {
        super(http);
    }

}