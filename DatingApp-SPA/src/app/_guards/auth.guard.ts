import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '_services/auth.service';
import { AlertifyService } from '_services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auther: AuthService,
              private alertify: AlertifyService,
              private router: Router) {}

  canActivate(): boolean {
    if (this.auther.loggedIn()) {
      return true;
    }

    this.alertify.error('未登入!!!');
    this.router.navigate(['home']);
    return false;
  }

}
