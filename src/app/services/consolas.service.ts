import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsolasService {

  //baseURI = "https://benc2024.github.io/ConsolaGames/consolas.json"
  baseURI = "http://localhost:3000/listConsolas"
  constructor(private httpClient: HttpClient) { }

  getServices(): Observable<any>{
    return this.httpClient.get(this.baseURI).pipe( catchError( e => { return throwError(e) } ) )
  }
}
