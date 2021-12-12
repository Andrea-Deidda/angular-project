import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieData } from 'src/app/models/data.model';
import { DataService } from 'src/app/services/data.service';
import { logging } from 'protractor';
import {DashboardComponent} from 'src/app/routes/dashboard/dashboard.component'

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  constructor( private dataService: DataService, private router : Router) { }

  genreInput : string;

  dashBoardComponent : DashboardComponent;

  ngOnInit(): void {
    this.getEntries();
    this.genreInput = this.dashBoardComponent.submitButton();
  }

 
  public movies: MovieData [];
  moviesDataLoader=false;
  
  genre: string = "Adventure"
  
  getEntries(){
    /*this.genre = this.dashBoardComponent.genreInput;*/
    this.dataService.getEntryByGenre(this.genreInput).subscribe( (response : any) => {
      this.movies = response;
      this.moviesDataLoader=true;
    })
    console.log(this.genreInput);
  }

  goToDetails(id){
    this.router.navigateByUrl('/details/' + id);
  }

}
