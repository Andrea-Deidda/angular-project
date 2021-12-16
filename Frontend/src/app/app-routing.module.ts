import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './routes/dashboard/dashboard.component'
import { AddComponent } from './routes/add/add.component';
import { DetailsComponent } from './routes/details/details.component';
import { EditComponent } from './routes/edit/edit.component';
import { LoginComponent } from './routes/login/login.component';
import { LoginErrorComponent } from './routes/login-error/login-error.component';
import { SignInComponent } from './routes/sign-in/sign-in.component';
import { WelcomeComponent } from './routes/welcome/welcome.component';
import { GenreComponent } from './routes/genre/genre.component';
import { TheMovieApiComponent } from './routes/the-movie-api/the-movie-api.component';


const routes: Routes = [
  { path: "", redirectTo : '/welcome', pathMatch: 'full' },
  { path: "dashboard", component : DashboardComponent },
  { path: "add", component : AddComponent },
  { path: "details/:id", component : DetailsComponent },
  { path: "edit/:id", component: EditComponent },
  { path: "login", component: LoginComponent},
  { path: "login-error", component: LoginErrorComponent},
  { path: "sign-in", component: SignInComponent},
  { path: "welcome", component: WelcomeComponent},
  { path: "genre/:genre", component: GenreComponent},
  { path: "theMovieApi", component: TheMovieApiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
