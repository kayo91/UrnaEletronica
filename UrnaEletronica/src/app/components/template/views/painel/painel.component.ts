
import { Urna } from './painel.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {


  numero = '';
  // numeros = document.querySelector('.d1-3');
  etapaAtual = 0;


  candidato: Urna = {
    cargo: '',
    nomeCandidato: '',
    numeroCandidato: 0,
  }

  cargo2 = ['Deputado Federal', 'Deputado Estadual', 'Senador', 'Presidente' ]
  // candiNumero = [7212]
  Route: any;


  constructor(
  ) { }

  ngOnInit(): void {

  }



listaNumeros(n: string){
  let audio = new Audio();
  audio.src = "../../../assets/som/click.mp3";
  audio.load();
  audio.play();

  let numeros = document.querySelector('.input.pisca');

  if(numeros !== null) {
    numeros.innerHTML = n;
    this.numero = `${this.numero}${n}`;

    numeros.classList.remove('pisca');

    if(numeros.nextElementSibling != null) {
      numeros.nextElementSibling.classList.add('pisca');
    } else {
      // atualizaInterface();
    }
  }

 }

 branco(){

}

corrige(){

}



//  listaNumeros(numero: string): void{
//  if (numero === '1') {
//   this.gravarNumero1 = '1'
//  }
//  if (numero == '2') {
//   this.gravarNumero2 = '2'
//  }
//  if (numero == '3') {
//   this.gravarNumero3 = '3'
//  }
//  if (numero == '4') {
//   this.gravarNumero4 = '4'
//  }
//  if (numero == '5') {
//   this.gravarNumero5 = '5'
//  }
//  if (numero == '6') {
//   this.gravarNumero6 = '6'
//  }
//  if (numero == '7') {
//   this.gravarNumero7 = '7'
//  }
//  if (numero == '8') {
//   this.gravarNumero8 = '8'
//  }
//  if (numero == '9') {
//   this.gravarNumero9 = '9'
//  }
//  if (numero == '0') {
//   this.gravarNumero0 = '0'
//  }
//  }


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
