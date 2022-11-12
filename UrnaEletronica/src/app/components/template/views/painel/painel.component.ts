
import { Urna } from './painel.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  teste1:  boolean = true;
  deputadoFederal: boolean = true;
  cargoDeputadoFederal = 'Deputado Federal'
  cargoDeputadoEstadual = 'Deputado Estadual'
  cargoSenador = 'Senador'
  cargoPresidente ='Presidente'
  federal = 5;
  elNumero: string = '';
  numero: string[] = [];
  // novoArray = new Array();

testee1: string = ''
testee2: string = '';
testee3: string = '';
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
    this.teste()
    // this.verificacao()
  }


  teste() {
  if (this.teste1 && this.deputadoFederal) {
    for(let i=0; i < this.federal; i++) {
       this.deputadoFederal = true
      console.log("verdadeiro" + this.deputadoFederal)
 }
  this.deputadoFederal = false
  console.log("fora" + this.deputadoFederal)
}
// return this.teste2()
}

verificacao() { // função para  capturar o elNumero e armazenar em um array
console.log('função verificação' + this.elNumero)
this.numero.unshift(this.elNumero[0])
// this.numero.unshift(this.elNumero[1])
// this.numero.unshift(this.elNumero[2])
console.log(this.numero) // está dentro do meu array

this.testee1 = this.numero[0];
this.testee2 = this.numero[1];
this.testee3 = this.numero[2];

// this.numero[0] = this.testee1
// this.numero[1] = this.testee2
// this.numero[2] = this.testee3

}

listaNumeros(n: string){
  let audio = new Audio();
  audio.src = "../../../assets/som/click.mp3";
  audio.load();
  audio.play();

  let numeros = document.querySelector('.input.pisca');
  console.log('fora do if' + n)
  if(numeros !== null) {
    numeros.innerHTML = n;
    this.elNumero = `${this.elNumero}${n}`;
    numeros.classList.remove('pisca');
    if(numeros.nextElementSibling != null) {
      numeros.nextElementSibling.classList.add('pisca');
    } else {
      this.verificacao()
    }
  }

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
