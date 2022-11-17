import { PainelService } from './painel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Urna } from './painel.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

 urna!: Urna[]

  teste1:  boolean = true;
  deputadoFederal: boolean = true;
  cargoDeputadoFederal = 'Deputado Federal'
  cargoDeputadoEstadual = 'Deputado Estadual'
  cargoSenador = 'Senador'
  cargoPresidente ='Presidente'
  federal = 5;
  elNumero: string = '';
  numero: string[] = [];


foto: boolean = false;


  etapaAtual = 0;


  candidato: Urna = {
    cargo: 'Stark',
    nomeCandidato: 'Ned Stark',
    numeroCandidato: ['5', '4', '3', '2', '1'],
  }

  cargo2 = ['Deputado Federal', 'Deputado Estadual', 'Senador', 'Presidente' ]




  constructor(
    private painelService: PainelService,
    private router: Router,
    private Route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.painelService.ler().subscribe(urna => {  // vai fazer uma requisição do tipo get no backend
    this.urna = urna
    // console.log(urna)
    this.novoTeste()
    })
  }


  novoTeste(){
    // this.urna.forEach(function(urnaCandidato) {
    //   console.log(urnaCandidato.numeroCandidato)
    //   urnaCandidato.numeroCandidato

    // })
    console.log("aqui" + this.urna)
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

    numeros.classList.remove('pisca');
    if(numeros.nextElementSibling != null) {
      numeros.nextElementSibling.classList.add('pisca');
    }
    else {
      console.log(this.numero) // está dentro do meu array
    }
    this.valida()
    // this.novoTeste
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
  location.reload();
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
