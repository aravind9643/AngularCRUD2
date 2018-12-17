import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { StudentService } from './student.service';
import { AppComponent } from './app.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentBVComponent } from './student-bv/student-bv.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDataComponent,
    StudentDetailsComponent,
    StudentFormComponent,
    StudentBVComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
