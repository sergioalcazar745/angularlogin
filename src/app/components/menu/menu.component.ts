import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public id: any = null;
  public apellido: any = null;

  constructor(private _cookie: CookieService) { }

  ngOnInit(): void {
    this.checkLogin()
  }

  ngDoCheck(){
    this.checkLogin()
  }

  checkLogin(){
    var cookie = this._cookie.get("token");
    if(cookie == null){
      this.id = null;
      this.apellido = null;
    }else{
      this.id = this._cookie.get("id")
      this.apellido = this._cookie.get("userName")
    }
  }

}
