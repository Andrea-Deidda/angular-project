import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user.service';
import { Router } from '@angular/router';
import { UserData } from '../../models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private userDataService: UserDataService, private router: Router) { }


  ngOnInit(): void {
  }

  userDataEntry : UserData;

  onSubmit(form : NgForm){
    this.userDataEntry = form.form.value;
    console.log(form)
    console.log(this.userDataEntry);

    this.userDataService.addEntry(this.userDataEntry).subscribe(response => {
      console.log(response);
      this.router.navigate(['/dashboard']);
    },
    (err) => {
      //fai qualcosa
    }
    )
  }
}

