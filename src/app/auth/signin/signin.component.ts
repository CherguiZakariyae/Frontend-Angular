import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  errorMessage !:string;
  email !:string;
  password !:string;
  constructor(private personService:PersonService,
              private router:Router) { }

  ngOnInit(): void {
  }
  onNavigate(endpoint: string) {
    this.router.navigate([endpoint]);
  }
  onSubmit(form:NgForm) {
    //this.loading = true;
    const email = form.value['email'];
    const password = form.value['password'];
    this.personService.login(email, password).then(
      () => {
        //this.loading = false;
        //if (this.state.part === 3) {
          this.router.navigate(['programs']);
        //} else if (this.state.part === 4) {
        //  this.router.navigate(['/part-four/all-stuff']);
        //}
      }
    ).catch(
      (error) => {
        //this.loading = false;
        this.errorMessage = error.message;
      }
    );
  }
}
