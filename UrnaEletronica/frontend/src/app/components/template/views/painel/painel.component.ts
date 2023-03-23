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

  cargoDeputadoFederal: boolean = false;
  cargoDeputadoEstadual: boolean = true;
  cargoSenador: boolean = false;
  cargoGovernador: boolean = false;
  cargoPresidente: boolean = false;
  elNumero: string = '';
  numero: string[] = [];
  fim: boolean = false;
  travaInfo: boolean = false;

  validaNumero: boolean = false;
  votoNulo: boolean = false;
  foto: boolean = false;

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
       this.urna.forEach((urnaCandidato) => {
        let i = this.numero.length;
        if (i != urnaCandidato.numeroCandidato.length)
        return false; { // retorna quando o array digitado  é falso
          //this.votoNulo = true
          console.log("Meu votonulo: " + this.votoNulo )
        while (i--) {
          if(this.numero[i] !== urnaCandidato.numeroCandidato[i])
            return false;
        }
        this.validaNumero = true
        console.log("meu validaNumero: " + this.validaNumero)
        this.travaInfo = false
        this.gravarNumero = urnaCandidato.numeroCandidato
        this.nomeCandidato = urnaCandidato.nomeCandidato
        this.partidoCandidato = urnaCandidato.partido
        this.imagem = urnaCandidato.foto
        return true;
       }
    })
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
    this.validaArray()
  }
 }

 branco(){
}

corrige(){
  location.reload();
}

confirma() {
  let audio = new Audio();
  let numeroVazio: string[] = [];
  this.numero = numeroVazio;
  this.travaInfo = true;

  switch (true) {
    case this.validaNumero && this.cargoDeputadoEstadual:
      this.cargoDeputadoEstadual = false;
      this.cargoDeputadoFederal = true;
      break;

    case this.validaNumero && this.cargoDeputadoFederal:
      this.cargoDeputadoFederal = false;
      this.cargoSenador = true;
      break;

    case this.validaNumero && this.cargoSenador:
      this.cargoSenador = false;
      this.cargoGovernador = true;
      break;

    case this.validaNumero && this.cargoGovernador:
      this.cargoGovernador = false;
      this.cargoPresidente = true;
      break;

    case this.validaNumero && this.cargoPresidente:
      this.cargoPresidente = false;
      this.fim = true;
      break;

    default:
      break;
  }

  if (this.validaNumero) {
    audio.src = "../../../assets/som/confirmar.mp3";
    audio.load();
    audio.play();
  }
}
  }

