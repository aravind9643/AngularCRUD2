import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  id;
  StudentData;
  constructor(private route: ActivatedRoute, private service: StudentService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(resp => {
      this.id = resp.get('id');
    });
    this.getData();
  }
  getData() {
    this.service.getByID(this.id).subscribe(resp => {
      this.StudentData = resp['data'];
    });
  }
}
