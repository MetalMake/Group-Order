import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CourseService } from './../shared/course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.page.html',
  styleUrls: ['./create-course.page.scss'],
})
export class CreateCoursePage implements OnInit {

  courseForm: FormGroup;

  constructor(
    private courseService: CourseService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.courseForm = this.fb.group({
      courseId: [''],
      name: ['']
    });
  }

  formSubmit() {
    if (!this.courseForm.valid) {
      return false;
    } else {
      this.courseService.createCourse(this.courseForm.value).then(res => {
        console.log(res);
        this.courseForm.reset();
        this.router.navigate(['/tab1']);
      })
        .catch((error => console.log(error)));
    }
  }
}
