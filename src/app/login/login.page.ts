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
Firebase test code
{
  "rules": {
    ".read": "now < 1608501600000",  // 2020-12-21
    ".write": "now < 1608501600000",  // 2020-12-21
  }
}
*/
