import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})
export class LotService {
  private apiUrl:string = 'http://localhost:5000/lots';

  constructor() { }

  // @todo CRUD for lots
}
