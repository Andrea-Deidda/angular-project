import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

export interface UserInterface {
  username: string,
  password: string
  }
  @Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  })
  export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
  usernameInput: string;
  passwordInput: string;
  admin : UserInterface = {
    username: "admin",
    password: "admin"
    }
    pippo : UserInterface = {
    username: "pippo",
    password: "pippo2"
    }
    users : UserInterface[]= [this.admin, this.pippo];
    ngOnInit() {
    }
    submitButton(){
    if(this.usernameInput!=null && this.passwordInput!=null){
    if(this.searchInsideArray(this.usernameInput, this.passwordInput)){
    this.router.navigate(['/dashboard']);
        }
      else {this.router.navigate(['/login-error']);}
      }
      else {this.router.navigate(['/login-error']);}
    }
    searchInsideArray(username: string, password:string): boolean{
      for(let i=0; i<this.users.length;i++){
      if(username==this.users[i].username && password== this.users[i].password){
      return true;
        }
      }
      return false;
        }
  }