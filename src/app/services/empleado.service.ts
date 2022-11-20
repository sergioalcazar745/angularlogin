import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Empleado } from '../models/empleado';

@Injectable()
export class EmpleadoService {

  constructor(private _http: HttpClient, private _cookie: CookieService) { }

  getEmpleados(): Observable<any>{
    
    var request = environment.url + "api/empleados";
    var header = new HttpHeaders().set("Authorization", "Bearer " + this._cookie.get("token"))
    return this._http.get(request, {headers: header});

  }
}
