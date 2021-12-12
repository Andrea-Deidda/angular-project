import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  baseURL = 'http://localhost:3000/user';

  constructor( private http : HttpClient) { }

  addEntry = (data: UserData) => {
    return this.http.post<UserData>(this.baseURL, {
      "name": data.name,
      "surname": data.surname
    });
  };
}
