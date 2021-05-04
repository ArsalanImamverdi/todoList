import { Injectable } from "@angular/core";
import { BaseService } from "./base-service";
import { HttpClient } from "@angular/common/http";
import { ToDoListService } from "./todo-list.decorator";
import { TaskListsController } from "./controllers/task-lists.controller";
import { TaskListModel } from "./models/task-list.model";

@Injectable({ providedIn: 'root' })
@ToDoListService(builder => builder.name('taskLists').controllerType(TaskListsController))
export class TaskListsService extends BaseService<TaskListModel> {

    constructor(protected http: HttpClient) {
        super(http);
    }

}