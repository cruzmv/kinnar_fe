import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  @ViewChild('unauthorized_label') unauthorized_label: any;
  @ViewChild('matSpinner') matSpinner: any;

  loginStatus: number = 0;
  signInMessage: string = '';

  loginForm = new FormGroup({
    user: new FormControl('',[
      Validators.required
    ]),
    password: new FormControl('',[
      Validators.required
    ])
  })

  constructor(private httpService: HttpService){}

  ngOnInit(): void {
  }

  loginSubmit(){
    this.loginStatus = 1;
    const body = {
      user: this.loginForm.value.user,
      password: this.loginForm.value.password
    };

    this.httpService.login(body).subscribe((resp: any) => {
      this.loginStatus = resp.status;
      if (this.loginStatus != 200) {
        return;
      }

      console.log('ok');
    },error => {
      this.loginStatus = error.status;
    },()=>{
      console.log('login completed');
    });
  }


  signin() {
    this.loginStatus = 1;
    const body = {
      user: this.loginForm.value.user,
      password: this.loginForm.value.password
    };
    
    this.httpService.signin(body).subscribe(
      (resp: any)=>{
        this.loginStatus = resp.status;
        if (this.loginStatus != 200) {
          return;
        }
        this.signInMessage = resp.message;
      },
      error => {
        this.loginStatus = error.status;
      },
      () => {
        console.log('signIn completed');
      });
  }





}
