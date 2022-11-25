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

  nomeCand: string = '';
  nomePart: string = '';

  teste1:  boolean = true;
  deputadoFederal: boolean = true;
  cargoDeputadoFederal: boolean = true;
  cargoDeputadoEstadual: boolean = false;
  cargoSenador: boolean = false;
  cargoPresidente: boolean = false;
  federal = 5;
  elNumero: string = '';
  numero: string[] = [];

  validaNumero: boolean = false;
  votoNulo: boolean = false;


  foto: boolean = false;


  etapaAtual = 0;

  gravarNumero!: string[];



  cargo2 = ['Deputado Federal', 'Deputado Estadual', 'Senador', 'Presidente' ]

 nomeCandidato: String = ''
 partidoCandidato: String = ''
 imagem: String = ''



  constructor(
    private painelService: PainelService,
    private router: Router,
    private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.painelService.ler().subscribe(urna => {  // vai fazer uma requisição do tipo get no backend
    this.urna = urna // this.urna é meu obj
    })
  }

  validaArray() {
    console.log("valida" + this.numero)
    // let i = this.numero.length;
       this.urna.forEach((urnaCandidato) => {
        let i = this.numero.length;
        if (i != urnaCandidato.numeroCandidato.length)
        return false; { // retorna quando o array digitado  é falso
          this.votoNulo = true
        while (i--) {
          if(this.numero[i] !== urnaCandidato.numeroCandidato[i])
            return false;
        }
        this.validaNumero = true
        this.gravarNumero = urnaCandidato.numeroCandidato
        this.nomeCandidato = urnaCandidato.nomeCandidato
        this.partidoCandidato = urnaCandidato.partido
        this.imagem = urnaCandidato.foto
        return true;
       }
    })
  }

//   teste(){ // trava
//   if (this.teste1 && this.deputadoFederal) {
//     for(let i=0; i < this.federal; i++) {
//        this.deputadoFederal = true
//       console.log("verdadeiro" + this.deputadoFederal)
//  }
//   this.deputadoFederal = false
//   console.log("fora" + this.deputadoFederal)
// }
// // return this.teste2()
// }

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
    this.validaArray()
  }
 }

 branco(){
}

corrige(){
  location.reload();
}

 confirma(){
   if(this.validaNumero){
    let audio = new Audio();
    audio.src = "../../../assets/som/confirmar.mp3";
    audio.load();
    audio.play();
   }

  }
}
