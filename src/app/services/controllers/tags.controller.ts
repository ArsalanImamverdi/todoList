import { HttpParams } from "@angular/common/http";
import { BaseService } from "../base-service";
import { Tags } from "../models/tags.model";
import { ColorsController } from "./colors.controller";
import { Controller } from "./controller";

export class TagsController extends Controller<Tags>{
    public get name(): string {
        return 'tags'
    }

    constructor() {
        super();

        let colorsController = <ColorsController>BaseService.services.find(s => s.name == 'colors').controller;

        this.objects.forEach(o => {
            o.color = colorsController.getById(new HttpParams().set('id', o.colorId.toString())).data
        });
    }
}