import { HttpParams } from "@angular/common/http";
import { BaseService } from "../base-service";
import { TaskListModel } from "../models/task-list.model";
import { ColorsController } from "./colors.controller";
import { Controller } from "./controller";
import { TaskController } from "./tasks.controller";

export class TaskListsController extends Controller<TaskListModel>{
    public get name(): string {
        return 'taskLists'
    }

    constructor() {
        super();

        let tasksController = <TaskController>BaseService.services.find(s => s.name == 'tags').controller
        let colorsController = <ColorsController>BaseService.services.find(s => s.name == 'colors').controller;

        this.objects.forEach(o => {
            o.taskIds.forEach(ti => {
                let tag = tasksController.getById(new HttpParams().set('id', ti.toString()))
                o.tasks = [];
                o.tasks.push(tag.data);
            });
            o.color = colorsController.getById(new HttpParams().set('id', o.colorId.toString())).data
        });
    }
}