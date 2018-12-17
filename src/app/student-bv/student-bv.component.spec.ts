import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBVComponent } from './student-bv.component';

describe('StudentBVComponent', () => {
  let component: StudentBVComponent;
  let fixture: ComponentFixture<StudentBVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentBVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
