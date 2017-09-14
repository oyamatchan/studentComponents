import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  studNo: number;
  studFname: string;
  studLname: string;
  studProg: string;
  studYr: number;
  studentRecord;
  resetFlag=false;
  constructor() { 

  }
  getStudentRecord():object{
   this.studentRecord={
     studNo:this.studNo,
     studFname: this.studFname,
     studLname: this.studLname,
     studProg: this.studProg,
     studYr:this.studYr

   };
    this.studNo=null;
    this.studFname=null;
    this.studLname=null;
    this.studProg=null;
    this.studYr=null;
    return this.studentRecord;
  }

  ngOnInit() {
  }

}





