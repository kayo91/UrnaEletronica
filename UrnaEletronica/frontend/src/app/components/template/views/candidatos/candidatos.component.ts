import { Page, PageRequest } from '../../../../_util/paginacao';
import { Component, OnInit } from '@angular/core';
import { Urna } from '../painel/painel.model';
import { PainelService } from '../painel/painel.service';
import { PageEvent} from '@angular/material/paginator';
import { take } from 'rxjs';
import { Sort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent implements OnInit {

  urna!: Urna[]
  numero: string[] = [];

  displayedColumns = ['id', 'nomeCandidato', 'partido', 'cargo', 'numeroCandidato']
  page: Page<Urna> = new Page([], 0);

  pageEvent!: PageEvent;
  sortEvent!: Sort;

  carregando = false;

  // dataSource = new MatTableDataSource<Urna>();


  constructor(private painelService: PainelService, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
  //   this.painelService.ler().subscribe(urna => {
  //     this.urna = urna
  //     this.urna.forEach((urnaCandidato) => {
  //       urnaCandidato.numeroCandidato.reverse()
  //       })
  // })
  this.listarItens();
}

listarItens() {
  this.carregando = true;
  const queryAdicional = new Map();
  this.painelService
      .ler2(
          new PageRequest(
              {
                  pageNumber: this.pageEvent ? this.pageEvent.pageIndex : 0,
                  pageSize: this.pageEvent ? this.pageEvent.pageSize : 10,
              },
              {
                  property: this.sortEvent ? this.sortEvent.active : "id",
                  direction: this.sortEvent ? this.sortEvent.direction : "asc",
              },
              queryAdicional
          )
      )
      .pipe(take(1))
      .subscribe(
          (page) => {
              this.page = page;
              this.carregando = false;
          },
          (error) => {
              this.page = new Page([], 0);
              this.carregando = false;
              this.matSnackBar.open("Erro ao listar itens", undefined, {
                  duration: 5000,
                  panelClass: "red-snackbar",
              });
          }
      );
        }
}

