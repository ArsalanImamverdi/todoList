import { Injectable } from "@angular/core";
import { BaseService } from "./base-service";
import { HttpClient } from "@angular/common/http";
import { ToDoListService } from "./todo-list.decorator";
import { ColorsController } from "./controllers/colors.controller";
import { Color } from "./models/color.model";

@Injectable({ providedIn: 'root' })
@ToDoListService(builder => builder.name('colors').controllerType(ColorsController))
export class ColorsService extends BaseService<Color> {

    constructor(protected http: HttpClient) {
        super(http);
    }

}