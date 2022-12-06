import { Component, OnInit } from '@angular/core';
import { Urna } from '../painel/painel.model';
import { PainelService } from '../painel/painel.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent implements OnInit {

  urna!: Urna[]

  displayedColumns = ['id', 'nomeCandidato', 'partido', 'cargo', 'numeroCandidato']

  // dataSource = new MatTableDataSource<Urna>();


  constructor(private painelService: PainelService) { }

  ngOnInit(): void {
    this.painelService.ler().subscribe(urna => {
      this.urna = urna
  })
}
}
