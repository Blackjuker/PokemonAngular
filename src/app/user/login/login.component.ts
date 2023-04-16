import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message : string ="Vous êtes déconnecté . username=azerty,passwordazerty"
  username !: string;
  password !: string;
  auth !: AuthService;
  
  constructor(private authService:AuthService,private router:Router) {

  }

  ngOnInit() {
    this.auth = this.authService;
  }
  setMessage() {
    if(this.auth.isLog){
     this.message= 'Vous êtes connecté.'
    }else{
      this.message= 'Informations inccorrect.'
    }
  }

  login() {
    this.message = "tentative de connection en cours...";
    this.auth.login(this.username, this.password)
    .subscribe((isLog: boolean) => {
      this.setMessage();
      if(isLog){
        this.router.navigate(['pokemon/all']);
      }else{
        this.password = "";
        this.router.navigate(['/login']);
      }
    })
  }

  logout() {
      this.auth.logout();
      this.message = "Vous ��tes déconnecté.";
  }
}
