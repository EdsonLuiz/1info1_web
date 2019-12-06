import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { VeiculosComponent } from './pages/veiculos/veiculos.component';
import { EntendaComponent } from './pages/entenda/entenda.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'veiculos', component: VeiculosComponent },
  { path: 'entenda', component: EntendaComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
