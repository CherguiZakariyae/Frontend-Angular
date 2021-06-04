import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  constructor(private router:Router,private location:Location) { }

  ngOnInit(): void {
  }

  reloadPage() {
    setTimeout(()=>{
      window.location.reload();
    }, 100);
  }
  /*refresh(): void {
    this.router.navigateByUrl("/companyprofile/addproject", { skipLocationChange: true }).then(() => {
      console.log(decodeURI(this.location.path()));
      this.router.navigate([decodeURI(this.location.path())]);
    });
  }*/
}
