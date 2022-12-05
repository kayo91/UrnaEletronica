import { PainelComponent } from './components/template/views/painel/painel.component';
import { CandidatosComponent } from './components/template/views/candidatos/candidatos.component';
import { GuiaComponent } from './components/template/views/guia/guia.component';
import { UrnaComponent } from './components/template/views/urna/urna.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: PainelComponent
  },
  {
    path: "guia",
    component: GuiaComponent
  },
  {
    path: "candidatos",
    component: CandidatosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
