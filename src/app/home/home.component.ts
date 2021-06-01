import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('dataTable',{static:false}) table: any;
  dataTable:any;
  //dtOptions:DataTables.Settings={};
  constructor() { }

  ngAfterViewInit(): void {
    this.dataTable=$(this.table.nativeElement);
    this.dataTable.DataTable();
    //this.dtOptions={
    //  pageLength:5,
     // lengthMenu:[5,10,20,50,100]
    //}
    }

  ngOnInit(): void {
    
  }

}
