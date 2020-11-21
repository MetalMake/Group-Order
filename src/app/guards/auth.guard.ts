import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authenticate.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(public auth: AuthenticationService) {}

canActivate(): boolean {
  return this.auth.isAuthenticated();
}
  }


