import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentBVComponent } from './student-bv/student-bv.component';

const routes: Routes = [
  { path: 'studentdata/studentdetails/:id', component: StudentDetailsComponent },
  { path: 'studentdata', component: StudentDataComponent },
  { path: 'studentform', component: StudentFormComponent },
  { path: 'studentdata/studentform/:id', component: StudentFormComponent },
  { path: 'studentbv', component: StudentBVComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
