import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../clientes/models/cliente';
import { catchError, tap } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handleHttp/handle-http-error.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl: string;

  constructor(

    private http: HttpClient,

    @Inject('BASE_URL') baseUrl: string,

    private handleErrorService: HandleHttpErrorService) {

    this.baseUrl = baseUrl;

  }

  get(): Observable<Cliente[]> {

    return this.http.get<Cliente[]>(this.baseUrl + 'api/Cliente')

      .pipe(

        tap(_ => this.handleErrorService.log('datos enviados')),

        catchError(this.handleErrorService.handleError<Cliente[]>('Consulta Cliente', null))

      );

  }

  post(cliente: Cliente): Observable<Cliente> {

    return this.http.post<Cliente>(this.baseUrl + 'api/Cliente', cliente)

      .pipe(

        tap(_ => this.handleErrorService.log('datos enviados')),

        catchError(this.handleErrorService.handleError<Cliente>('Registrar Cliente', null))

      );

  }

}