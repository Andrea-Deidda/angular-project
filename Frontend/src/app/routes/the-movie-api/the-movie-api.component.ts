import { Component, OnInit } from '@angular/core';
import { MovieApiInterface } from 'src/app/models/apiMovie.model';
import { MoviesApiService } from '../../services/moviesapi.service';
import { ResultInterface } from '../../models/apiMovie.model';

@Component({
  selector: 'app-the-movie-api',
  templateUrl: './the-movie-api.component.html',
  styleUrls: ['./the-movie-api.component.css']
})
export class TheMovieApiComponent implements OnInit {

  movies : MovieApiInterface; 
  resultApi : ResultInterface;

  constructor(private apiService : MoviesApiService) { }

  ngOnInit(): void {
      this.apiService.getMarvelList().subscribe(
        response => {
          this.movies = response;
          this.resultApi = this.movies.results;
        },
        err => console.log(err)
      )
  }

}
