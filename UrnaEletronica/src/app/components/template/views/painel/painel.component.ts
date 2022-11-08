import { Urna } from './painel.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  candidato: Urna = {
    cargo: '',
    nomeCandidato: '',
    numeroCandidato: 0,
  }

  cargo2 = ['Deputada(o) Federal', 'Deputada(o) Estadual', 'Senadora(or)', 'Presidenta(e)' ]
  Route: any;


  constructor(
  ) { }

  ngOnInit(): void {

  }

  // teste (){
  //   if (this.candidato)
  // }

}
