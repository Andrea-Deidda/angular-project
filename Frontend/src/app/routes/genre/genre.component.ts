import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private dataService: DataService, 
    private router : Router) { }

  dataEntry: MovieData;
  genre: string;
  ratedOption : string;

  ngOnInit(): void {
    this.genre = this.route.snapshot.params['genre'];
    this.fetchEntry()
    
  }

  public movies: MovieData [];
  moviesDataLoader=false;

  fetchEntry(){
    this.dataService.getEntryByGenre(this.genre).subscribe( (res: any ) => {
      this.movies = res;
      this.moviesDataLoader=true;
    })
  }


  /*getEntries(){
    this.dataService.getData().subscribe( (response : any) => {
      this.movies = response;
      this.moviesDataLoader=true;
    })
  }*/

  goToDetails(id){
    this.router.navigateByUrl('/details/' + id);
  }

}
