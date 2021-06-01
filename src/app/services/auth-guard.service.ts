import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { PersonService } from './person.service';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

   public isAuth!:boolean;
   private isAuthSub!: Subscription;

  constructor(private authService: PersonService,
              private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    this.isAuthSub = this.authService.isAuth$.subscribe(
      (auth: boolean) => {
        this.isAuth = auth;
      }
    );
    if(this.isAuth) {
      return true;
    } else {
      this.router.navigate(['/auth/signin']);
    }
    return false;
  }
}