import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Urna } from './painel.model';

@Injectable({
  providedIn: 'root'
})
export class PainelService {

  baseUrl = "http://localhost:3001/urna"


  constructor(private http: HttpClient) { }

 ler(): Observable<Urna[]> {
  return this.http.get<Urna[]>(this.baseUrl)
 }

}
