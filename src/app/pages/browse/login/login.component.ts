declare var google:any;
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  private router = inject(Router);
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '142847757272-1nrm3jpjf473nj63i7pct48tphe1s188.apps.googleusercontent.com',
      callback: (resp:any)=>{
        console.log(resp);
        this.handleLogin(resp);
      }
    });
    google.accounts.id.renderButton(document.getElementById("google-btn"),{
      theme: "filled_blue",
      size:'large',
      shape:'rectangle',
      width:350
    });
  }
  private decodeToken(token:string){
    return JSON.parse(atob(token.split(".")[1]));
  }
  handleLogin(response:any){
    if(response){
      // decode the Token
      const payLoad=this.decodeToken(response.credential);
      // store in session
      sessionStorage.setItem("loggedInuser",JSON.stringify(payLoad));
      // navigate to home/browser
      this.router.navigate(['browse'])
    }
  }

}
