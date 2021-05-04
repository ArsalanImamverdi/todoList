import { HttpParams } from "@angular/common/http";
import { BaseService } from "../base-service";
import { Tasks } from "../models/tasks.model";
import { ColorsController } from "./colors.controller";
import { Controller } from "./controller";
import { TagsController } from "./tags.controller";

export class TaskController extends Controller<Tasks>{
    public get name(): string {
        return 'tasks'
    }

    constructor() {
        super();

        let tagsController = <TagsController>BaseService.services.find(s => s.name == 'tags').controller
        let colorsController = <ColorsController>BaseService.services.find(s => s.name == 'colors').controller;

        this.objects.forEach(o => {
            o.tagIds.forEach(ti => {
                let tag = tagsController.getById(new HttpParams().set('id', ti.toString()))
                o.tags = [];
                o.tags.push(tag.data);
            })
            o.color = colorsController.getById(new HttpParams().set('id', o.colorId.toString())).data
        });
    }

    // public getById(params: HttpParams): ActionResult<Tasks> {
    //     throw new Error("Method not implemented.");
    // }
    // public getAll(params: HttpParams): ActionResult<Tasks[]> {
    //     throw new Error("Method not implemented.");
    // }
    // public insert(body: Tasks, params: HttpParams): ActionResult<number> {
    //     throw new Error("Method not implemented.");
    // }
    // public update(body: Tasks, params: HttpParams): ActionResult<boolean> {
    //     throw new Error("Method not implemented.");
    // }
    // public delete(params: HttpParams): ActionResult<boolean> {
    //     throw new Error("Method not implemented.");
    // }

}