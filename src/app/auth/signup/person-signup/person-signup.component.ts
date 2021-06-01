import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-signup',
  templateUrl: './person-signup.component.html',
  styleUrls: ['./person-signup.component.scss']
})
export class PersonSignupComponent implements OnInit {
  name!:string;
  email!:string;
  username!:string;
  password!:string;
  constructor(private personService:PersonService,
              private router:Router) { }

  ngOnInit(): void {
  }
  onNavigate(endpoint: string) {
    this.router.navigate([endpoint]);
  }
  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const email = form.value['email'];
    const password = form.value['password'];
    const username = form.value['username'];
    this.personService.createNewPerson(email,password,name,username);
    console.log(form.value);
    this.router.navigate(['programs']);
}
}
