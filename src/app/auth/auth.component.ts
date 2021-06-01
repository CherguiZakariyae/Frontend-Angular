import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonService} from '../services/person.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  //email!:string;
  //password!:string;
  constructor(/*private personService:PersonService*/) { }

  ngOnInit(): void {
  }
  /*onSubmit(form: NgForm) {
    const email = form.value['email'];
    const password = form.value['password'];
    this.personService.createNewPerson(email,password);
    console.log(form.value);
  }*/
}
