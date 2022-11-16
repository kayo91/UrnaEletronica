
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

// testee1: string = '';
// testee2: string = '';
// testee3: string = '';
// testee4: string = '';
// testee5: string = '';

foto: boolean = false;


  etapaAtual = 0;


  candidato: Urna = {
    cargo: 'Stark',
    nomeCandidato: 'Ned Stark',
    numeroCandidato: ['5', '4','3','2','1']
  }

  cargo2 = ['Deputado Federal', 'Deputado Estadual', 'Senador', 'Presidente' ]
  Route: any;


  constructor(
  ) { }

  ngOnInit(): void {
    // this.teste()
  }


  teste(){
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

listaNumeros(n: string){
  let audio = new Audio();
  audio.src = "../../../assets/som/click.mp3";
  audio.load();
  audio.play();

  let numeros = document.querySelector('.input.pisca');

  if(numeros !== null){
    numeros.innerHTML = n;
    this.elNumero = n;
    this.numero.unshift(this.elNumero[0])
    // this.testee1 = this.numero[4];
    // this.testee2 = this.numero[3];
    // this.testee3 = this.numero[2];
    // this.testee4 = this.numero[1];
    // this.testee5 = this.numero[0];


    numeros.classList.remove('pisca');
    if(numeros.nextElementSibling != null) {
      numeros.nextElementSibling.classList.add('pisca');
    }
    else {
      console.log(this.numero) // está dentro do meu array
    }
    this.valida()
  }
 }

 // Função para comparar 2 arrays
 valida(){
  let i = this.numero.length;
    if (i != this.candidato.numeroCandidato.length)return false;
    while (i--) {
      if (this.numero[i] !== this.candidato.numeroCandidato[i])  // retorna quando o array digitado  é falso
      return false;
    }
    // Quando os arrays forem iguais
    this.foto = true // enquanto for verdadeiro vai retorna a foto
    return true;
 }

 branco(){

}

corrige(){
}

 confirma(){
   if(this.foto){
    let audio = new Audio();
    audio.src = "../../../assets/som/confirmar.mp3";
    audio.load();
    audio.play();
   }

  }
}
