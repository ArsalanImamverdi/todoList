import { Injectable } from "@angular/core";
import { BaseService } from "./base-service";
import { HttpClient } from "@angular/common/http";
import { ToDoListService } from "./todo-list.decorator";
import { TagsController } from "./controllers/tags.controller";

@Injectable({ providedIn: 'root' })
@ToDoListService(builder => builder.name('tags').controllerType(TagsController))
export class TagsService extends BaseService<TagsService> {

    constructor(protected http: HttpClient) {
        super(http);
    }

}