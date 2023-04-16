import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLog : boolean = false;
  redirectUrl !: string;

  constructor() { }

  login(username:string, password:string):Observable<boolean> {
   const isLog = (username=="azerty" && password=="azerty");

   return of(isLog).pipe(delay(1000),
   tap(isLog => this.isLog = isLog));
  }

  logout() {
    this.isLog = false;
  }
}
