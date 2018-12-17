import { Component, OnInit } from '@angular/core';
import { StudentService } from './../student.service';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {
  StudentData;
  constructor(private service: StudentService) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.service.getAllData().subscribe(resp => {
      this.StudentData = resp['data'];
    });
  }
  delStd(student) {
    if (confirm("Do You want to Delete?")) {
      this.service.deleteData(student.id, student.row_version).subscribe(resp => {
        alert(resp['status']);
      });
    }
    this.loadData();
  }
}
