import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './templates/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { HistoriaService } from './services/historia.services';
import { VeiculosComponent } from './pages/veiculos/veiculos.component';
import { EntendaComponent } from './pages/entenda/entenda.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SobreComponent,
    ContatoComponent,
    HistoriaComponent,
    VeiculosComponent,
    EntendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HistoriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
