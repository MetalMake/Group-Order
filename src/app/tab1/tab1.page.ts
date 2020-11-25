import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/Course';
import { CourseService } from './../shared/course.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {


  Courses = [];

  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.fetchCourses();
    const courseRes = this.courseService.getCourseList();
    courseRes.snapshotChanges().subscribe(res => {
      this.Courses = [];
      res.forEach(item => {
        const a = item.payload.toJSON();
        // tslint:disable-next-line: no-string-literal
        a['$key'] = item.key;
        this.Courses.push(a as Course);
      });
    });
  }

fetchCourses() {
  this.courseService.getCourseList().valueChanges().subscribe(res => {
    console.log(res);
  });
}

deleteCourse(id) {
  console.log(id);
  if (window.confirm('Do you really want to delete?')) {
    this.courseService.deleteCourse(id);
  }
}
}

