import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  studentCollection: Array<any> = [];
  studentRecord:{
  studNo: number;
  studFname: string;
  studLname: string;
  studProg: string;
  studYr: number;
  }
  messages;
  printing: boolean=false;
   checkPatterns(value:any,pattern:RegExp):boolean{
    if(pattern.test(value))
      return true;
    else
      return false;
  }
  selectMode(event,dataset?){
    console.log(dataset);
    if(event.mode==='add'){
      this.studentRecord=dataset;
      this.addStudentEntry();
    }else if (event.mode==='print'){
      this.listStudents();
    }
  }

  addStudentEntry():boolean{
    this.printing= false;
    const stringPattern=/^[A-z\s]+$/;
    const studNumberPattern=/^[0-9]+$/;
    const studYearPattern=/^[1-5]+$/;
       if(this.checkPatterns(this.studentRecord.studNo,studNumberPattern)&&
          this.checkPatterns(this.studentRecord.studFname,stringPattern)&&
           this.checkPatterns(this.studentRecord.studLname,stringPattern)&&
          this.checkPatterns(this.studentRecord.studProg,stringPattern)&&
          this.checkPatterns(this.studentRecord.studYr,studYearPattern) ){

            this.studentCollection.push(this.studentRecord);
            console.log(this.studentCollection);
             
          } 
          else {
            this.messages='Errors have been encountered and therefore cannot continue to process requested operation.';
            
            return false;
          }
         this.messages='';
         return true;
  }
        listStudents(): boolean{
          this.printing = true;

          return this.printing;
        }
         ngOnInit() {
  }
}