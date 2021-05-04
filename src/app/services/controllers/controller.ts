import { HttpParams } from "@angular/common/http";
import { DataReader } from "src/app/data/data-reader.helper";
import { ActionResult, ActionResultBuilder } from "../models/action-result.model";
import { BaseServiceModel } from "../models/base.model";

export abstract class Controller<T extends BaseServiceModel> {
    protected objects: T[]
    public abstract get name(): string;

    public getById(params: HttpParams): ActionResult<T> {
        let id: number = Number(params.get('id'))
        let user = this.objects.find(o => o.id == id);
        let actionResult = new ActionResultBuilder<T>().data(user).status(builder => builder.message('OK').statusCode(200)).build();
        return actionResult;
    }
    public getAll(params: HttpParams): ActionResult<T[]> {
        let actionResult = new ActionResultBuilder<T[]>().data(this.objects).status(builder => builder.message('OK').statusCode(200)).build();
        return actionResult;
    }
    public insert(body: T, params: HttpParams): ActionResult<number> {
        let m = Math.max(...this.objects.map(i => i.id)) + 1;
        body.id = m;

        this.objects.push(body);
        let actionResult = new ActionResultBuilder<number>().data(body.id).status(builder => builder.message('OK').statusCode(200)).build();
        return actionResult;
    }
    public update(body: T, params: HttpParams): ActionResult<boolean> {
        let actionResult: ActionResult<boolean>

        let obj = this.objects.find(o => o.id == body.id);

        if (!obj) {
            actionResult = new ActionResultBuilder<boolean>().data(false).status(builder => builder.message('Not found').statusCode(100)).build();
            return actionResult;
        }

        let objNames = Object.getOwnPropertyNames(obj).filter(on => on != 'id' && !(obj[on] instanceof BaseServiceModel));

        objNames.forEach(on => obj[on] = body[on]);
        actionResult = new ActionResultBuilder<boolean>().data(true).status(builder => builder.message('OK').statusCode(200)).build();
        return actionResult;
    }
    public delete(params: HttpParams): ActionResult<boolean> {
        let actionResult: ActionResult<boolean>

        let id = Number(params.get('id'));

        let obj = this.objects.find(o => o.id == id);
        if (!obj) {
            actionResult = new ActionResultBuilder<boolean>().data(false).status(builder => builder.message('Not found').statusCode(100)).build();
            return actionResult;
        }

        this.objects = this.objects.filter(u => u.id != id)
        actionResult = new ActionResultBuilder<boolean>().data(true).status(builder => builder.message('OK').statusCode(200)).build();
        return actionResult;
    }

    constructor() {
        this.init()
    }
    init() {
        this.objects = DataReader.read(this.name);
        if (!this.objects) this.objects = []
    }

}