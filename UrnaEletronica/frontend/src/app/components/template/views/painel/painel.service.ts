import { QueryBuilder, Page } from '../../../../_util/paginacao';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Urna } from './painel.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PainelService {

  baseUrl = "http://localhost:3001/urna"
  // baseUrl2 = "http://localhost:3001/urna?_%1Fpage=1&_limit=10"


  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private httpClient: HttpClient) { }

  showMenssage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error']  : ['msg-success'] // se a mensager n for erro caso contrario sucesso
    })
  }

 ler(): Observable<Urna[]> {
  return this.http.get<Urna[]>(this.baseUrl).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
  )
 }

 ler2(queryBuilder: QueryBuilder): Observable<Page<Urna>> {
  return this.httpClient.get<Urna[]>(`${this.baseUrl}?${queryBuilder.buildQueryString()}`, {observe: 'response'})
  .pipe(
      map(response => <Page<Urna>>Page.fromResponse(response))
  );

}

errorHandler(e: any): Observable<any> {
  this.showMenssage("Ocorreu um erro!", true)
  return EMPTY
}

}
