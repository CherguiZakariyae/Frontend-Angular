import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onNavigate(endpoint: string) {
    this.router.navigate([endpoint]).then(() => {
      window.location.reload();
    });
  }
}
