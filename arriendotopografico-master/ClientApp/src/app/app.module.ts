import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ClienteConsultaComponent } from './clientes/consultarCliente/cliente-consulta/cliente-consulta.component';
import { ClienteRegistroComponent } from './clientes/registrarCliente/cliente-registro/cliente-registro.component';
import { EquipoRegistroComponent } from './equipos/registroEquipo/equipo-registro/equipo-registro.component';
import { EquipoConsultaComponent } from './equipos/consultaEquipo/equipo-consulta/equipo-consulta.component';
import { ArriendoConsultaComponent } from './arriendos/consultaArriendo/arriendo-consulta/arriendo-consulta.component';
import { ArriendoRegistroComponent } from './arriendos/registroArriendo/arriendo-registro/arriendo-registro.component';
import { AppRoutingModule } from './app-routing.module';
import { ClienteService } from './services/cliente.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ClienteConsultaComponent,
    ClienteRegistroComponent,
    EquipoRegistroComponent,
    EquipoConsultaComponent,
    ArriendoConsultaComponent,
    ArriendoRegistroComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
