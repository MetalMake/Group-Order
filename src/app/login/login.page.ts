import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string;
  password: string;

  constructor(public userService: UserService) { }

  ngOnInit() {
  }
login() {
  this.userService.login(this.username, this.password);
}
}



/*
Firebase Cloud Firestore code

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if
          request.time < timestamp.date(2020, 12, 21);
    }
  }
}

*/
