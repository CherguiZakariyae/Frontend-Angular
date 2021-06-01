import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy {

  public isAuth!: boolean;
  public username!: string;

  private isAuthSub!: Subscription;
  private usernameSub!: Subscription;
  
  
  constructor(private personService:PersonService,
              private router:Router) { }

  ngOnInit(): void {
    this.isAuthSub = this.personService.isAuth$.subscribe(
      (auth: boolean) => {
        this.isAuth = auth;
      }
    );
    this.usernameSub = this.personService.userName$.subscribe(
      (username : any) => {
        this.username = username;
      }
    );
    
    
  }
  onLogout() {
    this.personService.logout();
    this.router.navigate(['/auth/signin']);
  }
  goProfile() { 
    this.router.navigate(['/profile']);
  }

  ngOnDestroy(){
    this.isAuthSub.unsubscribe();
    this.usernameSub.unsubscribe();
  }
}
