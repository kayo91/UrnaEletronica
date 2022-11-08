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

 branco(){

 }

 corrige(){

 }

 clickSom(){
  let audio = new Audio();
  audio.src = "../../../assets/som/click.mp3";
  audio.load();
  audio.play();
 }

 confirma(){
    let audio = new Audio();
    audio.src = "../../../assets/som/confirmar.mp3";
    audio.load();
    audio.play();
  }
}
