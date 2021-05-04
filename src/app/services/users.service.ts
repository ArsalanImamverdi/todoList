import { Injectable } from "@angular/core";
import { BaseService } from "./base-service";
import { HttpClient, HttpParams } from "@angular/common/http";
import { ToDoListService } from "./todo-list.decorator";
import { UserController } from "./controllers/users.controller";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
@ToDoListService(builder => builder.name('users').controllerType(UserController))
export class UsersService extends BaseService<UsersService> {

    constructor(protected http: HttpClient) {
        super(http);
    }

    public login(username: string, password: string): Observable<boolean> {
        return this.http.post<boolean>(this.url, { 'username': username, 'password': password }, { params: new HttpParams().set("action", 'login') });
    }

}