import { Injectable } from '@angular/core';
import { Course} from '../shared/Course';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class CourseService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;
  courseListRef: any;
  courseRef: AngularFireObject<unknown>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createCourse(course: Course) {
    return this.courseListRef.push({
      $key: course.$key,
      name: course.name,
      cart: course.cart
    });
  }

  // Get Single
  getCourse(id: string) {
    this.courseRef = this.db.object('/course/' + id);
    return this.courseRef;
  }

  // Get List
  getCourseList() {
    this.courseListRef = this.db.list('/course');
    return this.courseListRef;
  }

  // Update
  updateCourse(id: string, course: Course) {
    return this.courseRef.update({
      name: course.name,
      cart: course.cart
    });
  }

  // Delete
  deleteCourse(id: string) {
    this.courseRef = this.db.object('/course/' + id);
    this.courseRef.remove();
  }
}
