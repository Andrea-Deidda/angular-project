import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { Router } from '@angular/router';
import { MovieData } from '../../models/data.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private dataService: DataService, private router : Router) { }
  
  genreInput : string;

  ngOnInit(): void {
    this.getEntries()
  }

  public movies: MovieData [];
  moviesDataLoader=false;
  loadingPage=true;

  genre: string = ""
  submitButton(){
    this.genre= this.genreInput;
    return this.genre;
  }

  getEntries(){
    this.dataService.getData().subscribe( (response : any) => {
      this.movies = response;
      this.moviesDataLoader=true;
      this.loadingPage=false;

    })
  }

  goToDetails(id){
    this.router.navigateByUrl('/details/' + id);
  }

  

}
