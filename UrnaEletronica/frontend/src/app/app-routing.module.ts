import { PainelComponent } from './components/template/views/painel/painel.component';
import { UrnaComponent } from './components/template/views/urna/urna.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: UrnaComponent
  },
  {
    path: "urna",
    component: PainelComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
