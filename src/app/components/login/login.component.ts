import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("cajausuario") cajaUsuario!: ElementRef;
  @ViewChild("cajapassword") cajaPassword!: ElementRef;

  constructor(private _service: LoginService, private router: Router, private _cookie: CookieService) { }

  ngOnInit(): void {

  }

  login(){
    var object = {userName: this.cajaUsuario.nativeElement.value, password: this.cajaPassword.nativeElement.value}
    this._service.login(object).subscribe(response => {
      this._cookie.set("token", response.response)
      this._cookie.set("id", object.password)
      this._cookie.set("userName", object.userName)
      this.router.navigateByUrl("/empleados")
    })
  }

}
