import { Component, OnInit } from '@angular/core';
import { StudentService } from './../student.service';

@Component({
  selector: 'app-student-bv',
  templateUrl: './student-bv.component.html',
  styleUrls: ['./student-bv.component.css']
})
export class StudentBVComponent implements OnInit {
  StudentData;
  constructor(private service: StudentService) { }

  ngOnInit() {
    this.service.getBv().subscribe(resp => {
      this.StudentData = resp['data'];
    });
  }

}
