import { Type } from "@angular/core";
import { BaseService } from "./base-service";
import { Controller } from "./controllers/controller";
import { BaseServiceModel } from "./models/base.model";


export function ToDoListService<T extends Controller<BaseServiceModel>>(args: (args: ToDoListServiceArgumentBuilder<T>) => ToDoListServiceArgumentBuilder<T>) {
    return function (target) {
        let arg = new ToDoListServiceArgumentBuilder<T>();
        args(arg);
        BaseService.services.push(arg.build());
    }
}
export class ToDoListServiceArguments<T extends Controller<BaseServiceModel>> {
    private __controller: T;
    name: string;
    controllerType: Type<T>;
    public get controller(): T {
        if (!this.__controller) {
            this.__controller = new this.controllerType();
        }
        return this.__controller
    }
}
export class ToDoListServiceArgumentBuilder<T extends Controller<BaseServiceModel>>{
    private toDoListServiceArgument = new ToDoListServiceArguments<T>()

    public name(name: string): ToDoListServiceArgumentBuilder<T> {
        this.toDoListServiceArgument.name = name;
        return this;
    }
    public controllerType(type: Type<T>) {
        this.toDoListServiceArgument.controllerType = type;
        return this;
    }
    public build() {
        return this.toDoListServiceArgument;
    }
}
