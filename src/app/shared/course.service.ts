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
  createCourse(apt: Course) {
    return this.courseListRef.push({
      name: apt.name,
      cart: apt.cart
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
  updateCourse(id, apt: Course) {
    return this.courseRef.update({
      name: apt.name,
      cart: apt.cart
    });
  }

  // Delete
  deleteCourse(id: string) {
    this.courseRef = this.db.object('/course/' + id);
    this.courseRef.remove();
  }
}
