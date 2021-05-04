import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { BaseService } from './base-service';
export class TodoListHttpInterceptor implements HttpInterceptor {
    public static requests: { method: string, url: string, action: string, token: string }[] = []
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var service = BaseService.services.find(h => h.name.toLowerCase() == req.url.toLowerCase());
        var action = req.params.get('action');
        var method = req.method;
        let token = Guid.newGuid();
        TodoListHttpInterceptor.requests.push({ method: method, url: req.url, action: action, token: token });
        return new Observable(ob => ob.next(new HttpResponse({ body: method == 'POST' || method == 'PUT' ? service.controller[action](req.body, req.params.set('token', token)) : service.controller[action](req.params.set('token', token)) })));
    }
}

class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}