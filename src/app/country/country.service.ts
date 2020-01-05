import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICountry } from './country';

const URL = 'https://restcountries.eu/rest/v2/';
@Injectable({
  providedIn: 'root'
})
export class CountryService {



  constructor(private http: HttpClient) { }

  /* getCourses() {
     return [
       { "id": 1, "title": "Programming" },
       { "id": 2, "title": "Data Structure" },
       { "id": 3, "title": "Software Engineering" },
       { "id": 4, "title": "Compiler Construction" },
       { "id": 5, "title": "Software Testing" }
     ];
   }*/

  getCountry(parameter: String): Observable<ICountry> {
    // console.log(URL + parameter);
    return this.http.get<ICountry>(URL + parameter);
  }



}