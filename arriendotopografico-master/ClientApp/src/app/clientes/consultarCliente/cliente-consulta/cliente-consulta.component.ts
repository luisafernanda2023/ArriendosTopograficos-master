import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-consulta',
  templateUrl: './cliente-consulta.component.html',
  styleUrls: ['./cliente-consulta.component.css']
})
export class ClienteConsultaComponent implements OnInit {

 
clientes:Cliente[];

constructor(private clienteService: ClienteService) { }
ngOnInit() {
this.clienteService.get().subscribe(result => {
this.clientes = result;
});

}

}