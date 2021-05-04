import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { ActionResult } from "./models/action-result.model";
import { ToDoListServiceArguments } from "./todo-list.decorator";

export abstract class BaseService<T> {
    public static services: ToDoListServiceArguments<any>[] = []



    constructor(protected http: HttpClient) {
    }

    public getById(id: number): Observable<ActionResult<T>> {
        return this.http.get<ActionResult<T>>(`${this.url}`, { params: new HttpParams().set('action', 'getById').set('id', id.toString()) });
    }
    public getAll(): Observable<ActionResult<T[]>> {
        return this.http.get<ActionResult<T[]>>(`${this.url}`, { params: new HttpParams().set('action', 'getAll') });
    }
    public insert(model: any): Observable<ActionResult<number>> {
        return this.http.post<ActionResult<number>>(this.url, model, { params: new HttpParams().set('action', 'insert') })
    }
    public update(model: T): Observable<ActionResult<boolean>> {
        return this.http.put<ActionResult<boolean>>(this.url, model, { params: new HttpParams().set('action', 'update') })
    }
    public delete(id: number): Observable<ActionResult<boolean>> {
        return this.http.delete<ActionResult<boolean>>(this.url, { params: new HttpParams().set('action', 'update').set('id', id.toString()) })

    }

    protected get url(): string {
        return (<string>((<any>this).constructor.name)).replace('Service', '').toLowerCase()
    }
}