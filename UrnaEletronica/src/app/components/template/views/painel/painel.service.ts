import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Urna } from './painel.model';

@Injectable({
  providedIn: 'root'
})
export class PainelService {

  baseUrl = "http://localhost:3001/Urna"
  http: any;

  constructor() { }


  // // teste
  // read(): Observable<Urna[]> { // responsavel por lê os produtos cadastrado no backend
  //   return this.http.get<Urna[]>(this.baseUrl) .pipe(
  //     map((obj) => obj),
  //     catchError(async (e) => this.errorHandler(e))
  //   )
  // }
  // errorHandler(e: any) {
  //   throw new Error('Method not implemented.');
  // }

  // readById(id:number): Observable<Urna> {
  //   const url = `${this.baseUrl}/${id}`
  //   return this.http.get<Urna>(url).pipe(
  //     map((obj) => obj),
  //     catchError(async (e) => this.errorHandler(e))
  //   )
  // }
}
