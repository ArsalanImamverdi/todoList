import { HttpParams } from "@angular/common/http";
import { Users } from "../models/users.model";
import { Controller } from "./controller";
import { Md5 } from 'ts-md5/dist/md5'
import { ActionResult, ActionResultBuilder } from "../models/action-result.model";

export class UserController extends Controller<Users> {

    public get name(): string {
        return 'users'
    }
    constructor() {
        super();
    }

    public insert(body: Users, params: HttpParams): ActionResult<number> {

        let actionResult: ActionResult<number>

        if (this.objects.find(f => f.username == body.username)) {
            actionResult = new ActionResultBuilder<number>().data(null).status(builder => builder.message('User Already exsits').statusCode(504)).build();
            return actionResult;
        }



        let p = Md5.hashStr(body.password);
        body.password = p.toString().toUpperCase();

        return super.insert(body, params);
    }
    public update(body: Users, params: HttpParams): ActionResult<boolean> {
        if (body.password) {
            let password = Md5.hashStr(body.password).toString().toUpperCase();
            body.password = password;
        }
        return super.update(body, params);
    }

    public login(body: any, params: HttpParams): ActionResult<boolean> {
        let result = new ActionResultBuilder<boolean>();
        let username = body['username'];
        let password = body['password'];
        let user = this.objects.find(u => u.username == username);
        if (!user) return result.data(false).status(builder => builder.message('Username or password is wrong').statusCode(300)).build();

        let hash = Md5.hashStr(password);

        if (hash.toString().toLowerCase() != user.password.toString().toLowerCase())
            return result.data(false).status(builder => builder.message('Username or password is wrong').statusCode(300)).build();

        return result.data(true).status(builder => builder.message('OK').statusCode(300)).build();
    }

}