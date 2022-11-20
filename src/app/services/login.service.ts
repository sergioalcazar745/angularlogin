import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class LoginService{

    constructor(private _http: HttpClient){}

    login(login: Object): Observable<any>{

        var request = environment.url + "auth/login";
        var header = new HttpHeaders().set("Content-Type", "application/json");
        var json = JSON.stringify(login);
        return this._http.post(request, json, {headers: header});

    }

}