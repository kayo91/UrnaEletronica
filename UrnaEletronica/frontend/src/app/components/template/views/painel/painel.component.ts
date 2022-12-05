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
          this.votoNulo = true
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
  // let audio = new Audio();
  // let numeroVazio: string[] = []
  // switch (!this.validaNumero) {
  //   case this.cargoDeputadoEstadual:
  //     this.numero = numeroVazio
  //     this.travaInfo = true
  //     this.cargoDeputadoEstadual = false;
  //     this.cargoDeputadoFederal = true;
  //     audio.src = "../../../assets/som/confirmar.mp3";
  //     audio.load();
  //     audio.play();
  //     break;
  //   case this.cargoDeputadoFederal:
  //     this.numero = numeroVazio
  //     this.travaInfo = true
  //     this.cargoDeputadoFederal = false;
  //     this.cargoSenador = true;
  //     audio.src = "../../../assets/som/confirmar.mp3";
  //     audio.load();
  //     audio.play();
  //     break;

  //   case this.cargoSenador:
  //       this.numero = numeroVazio
  //       this.travaInfo = true
  //       this.cargoSenador = false;
  //       this.cargoGovernador = true;
  //       audio.src = "../../../assets/som/confirmar.mp3";
  //       audio.load();
  //       audio.play();
  //       break;

  //   case this.cargoGovernador:
  //       this.numero = numeroVazio
  //       this.travaInfo = true
  //       this.cargoGovernador = false;
  //       this.cargoPresidente = true;
  //       audio.src = "../../../assets/som/confirmar.mp3";
  //       audio.load();
  //       audio.play();
  //       break;

  //   case this.cargoPresidente:
  //     this.numero = numeroVazio
  //     this.travaInfo = true
  //     this.cargoPresidente = false;
  //     this.fim = true
  //     audio.src = "../../../assets/som/confirmar.mp3";
  //     audio.load();
  //     audio.play();
  //     break;
  //    }
}

corrige(){
  location.reload();
}

 confirma(){
   if(this.validaNumero || !this.validaNumero){
    let audio = new Audio();
    let numeroVazio: string[] = []
   switch (this.validaNumero || !this.validaNumero) { // botão funciona tanto para voto invalido quando para branco
    case this.cargoDeputadoEstadual:
      this.numero = numeroVazio
      this.travaInfo = true
      this.cargoDeputadoEstadual = false;
      this.cargoDeputadoFederal = true;
      audio.src = "../../../assets/som/confirmar.mp3";
      audio.load();
      audio.play();
      break;
    case this.cargoDeputadoFederal:
      this.numero = numeroVazio
      this.travaInfo = true
      this.cargoDeputadoFederal = false;
      this.cargoSenador = true;
      audio.src = "../../../assets/som/confirmar.mp3";
      audio.load();
      audio.play();
      break;

    case this.cargoSenador:
        this.numero = numeroVazio
        this.travaInfo = true
        this.cargoSenador = false;
        this.cargoGovernador = true;
        audio.src = "../../../assets/som/confirmar.mp3";
        audio.load();
        audio.play();
        break;

    case this.cargoGovernador:
        this.numero = numeroVazio
        this.travaInfo = true
        this.cargoGovernador = false;
        this.cargoPresidente = true;
        audio.src = "../../../assets/som/confirmar.mp3";
        audio.load();
        audio.play();
        break;

      case this.cargoPresidente:
        this.numero = numeroVazio
        this.travaInfo = true
        this.cargoPresidente = false;
        this.fim = true
        audio.src = "../../../assets/som/confirmar.mp3";
        audio.load();
        audio.play();
        break;
     }
   }
   }
  }

