import { Component, OnInit } from '@angular/core';
import { StudentModel } from './student.model';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  student: StudentModel;
  data;
  id;
  row_version;
  showbtn: boolean = false;
  constructor(private service: StudentService, private route: ActivatedRoute) {
    this.student = new StudentModel();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(resp => {
      this.id = resp.get('id');
    });
    if (this.id) {
      this.editStudent();
    }
  }
  addStudent(student: StudentModel) {
    student.formname = "sc_employees4";
    this.service.postData(student).subscribe(resp => {
      alert(resp['status']);
    });
    this.student = new StudentModel();
  }
  editStudent() {
    this.service.getByID(this.id).subscribe(resp => {
      this.student.data = resp['data'];
      this.row_version = resp['data'].row_version;
      this.showbtn = true;
    });
  }
  modStudent(student: StudentModel) {
    student.formname = "sc_employees4";
    this.service.updataData(this.id, this.row_version, student).subscribe(resp => {
      alert(resp['status']);
    });
  }
}
