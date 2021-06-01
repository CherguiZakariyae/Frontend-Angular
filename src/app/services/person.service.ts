import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  isAuth$ = new BehaviorSubject<boolean>(false);
  userName$ = new BehaviorSubject<string>("");
  token!: string;
  userId!: string;

  constructor(private http:HttpClient,
              private router:Router) { }

  createNewPerson(email: string, password: string, name: string, username: string) {
    return new Promise<void>((resolve, reject) => {
      this.http.post(
        'http://localhost:3000/api/auth/signup',
        { email: email, password: password, name: name, username: username})
        .subscribe(
          () => {
            this.login(email, password).then(
              () => {
                resolve();
              }
            ).catch(
              (error) => {
                reject(error);
              }
            );
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http.post(
        'http://localhost:3000/api/auth/login',
        { email: email, password: password })
        .subscribe(
          (authData:any) => {
            this.token = authData.token;
            this.userId = authData.userId;
            this.isAuth$.next(true);
            this.userName$.next(authData.username);
            resolve(authData);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  logout() {
    this.isAuth$.next(false);
    this.userName$.next("");
    this.userId = "";
    this.token = "";
  }
}
