import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _cookie: CookieService, private _route: Router) { }

  ngOnInit(): void {
    this._cookie.delete("token");
    this._cookie.delete("id");
    this._cookie.delete("userName");
    this._route.navigateByUrl("/")
  }

}
