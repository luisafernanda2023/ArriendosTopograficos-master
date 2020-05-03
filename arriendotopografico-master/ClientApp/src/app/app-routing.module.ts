import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClienteConsultaComponent } from './clientes/consultarCliente/cliente-consulta/cliente-consulta.component';
import { ClienteRegistroComponent } from './clientes/registrarCliente/cliente-registro/cliente-registro.component';
import { EquipoConsultaComponent } from './equipos/consultaEquipo/equipo-consulta/equipo-consulta.component';
import { EquipoRegistroComponent } from './equipos/registroEquipo/equipo-registro/equipo-registro.component';
import { ArriendoConsultaComponent } from './arriendos/consultaArriendo/arriendo-consulta/arriendo-consulta.component';
import { ArriendoRegistroComponent } from './arriendos/registroArriendo/arriendo-registro/arriendo-registro.component';

const routes: Routes = [

  {
    path: 'clienteConsulta',
    component: ClienteConsultaComponent
  },

  {
    path: 'clienteRegistro',
    component: ClienteRegistroComponent
  },

  {
    path: 'equipoConsulta',
    component: EquipoConsultaComponent
  },

  {
    path: 'equipoRegistro',
    component: EquipoRegistroComponent
  },

  {
    path: 'arriendoConsulta',
    component: ArriendoConsultaComponent
  },

  {
    path: 'arriendoRegistro',
    component: ArriendoRegistroComponent
  }

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
