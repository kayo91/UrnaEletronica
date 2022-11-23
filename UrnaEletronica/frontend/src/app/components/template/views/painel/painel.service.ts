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


  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient) { }

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

errorHandler(e: any): Observable<any> {
  this.showMenssage("Ocorreu um erro!", true)
  return EMPTY
}

}
