import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MaxMod } from './MaxMod';


@Injectable({
  providedIn: 'root'
})
export class NumberService {

  private readonly API = 'Http://localhost:8080/buildnumber'

  constructor(private http: HttpClient) { }

  add(number: MaxMod): Observable<MaxMod>{
    return this.http.post<MaxMod>(this.API, number);
  }

  list(): Observable<MaxMod[]>{
    return this.http.get<MaxMod[]>(`${this.API}/all`);
  }



}
