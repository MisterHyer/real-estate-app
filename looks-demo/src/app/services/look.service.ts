import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Look } from '../models/Look';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})
export class LookService {
  private apiUrl:string = 'http://localhost:5000/looks';

  constructor(private http:HttpClient) { }

  getLooks(): Observable<Look[]>{
    return this.http.get<Look[]>(this.apiUrl);
  }
}
