import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Consolas } from 'app/interfaces/consola';

@Injectable({
  providedIn: 'root'
})
export class ConsolasService {

  //baseURI = "https://benc2024.github.io/ConsolaGames/consolas.json"
  baseURI1 = "http://localhost:3000/listConsolas"
  baseURI2 = "http://localhost:3000/saveConsola"
  
  constructor(private httpClient: HttpClient) { }

  getServices(): Observable<any>{
    return this.httpClient.get(this.baseURI1).pipe( catchError( e => { return throwError(e) } ) )
  }

  guardarConsola(consola: Consolas):Observable<any>{
    return this.httpClient.post(this.baseURI2,consola).pipe(
       catchError(
          e => {
             console.log(e)
             return e
          }
       )
    )
 }

}
