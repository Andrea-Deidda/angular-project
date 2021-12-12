import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }


onSubmit(form: NgForm){
var nome = "user";
var password = "user" ;

if ((form.value.name === nome) && (form.value.password === password) ) {
  this.router.navigate(['/dashboard']);
}
else{
  this.router.navigate(['/login-error']);
}

}

}
