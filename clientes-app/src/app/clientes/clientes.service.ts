import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
//import { CLIENTES } from './clientes.json'; se comenta ya que estamos obteniendo los datos de forma dinamica del backend directamente
import {of, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http'; // para conexiones http con el backend
//import {map} from 'rxjs/operators';

@Injectable()
export class ClientesService {

  private urlEndPoint:string = 'http://localhost:8080/api/clientes';


  constructor(private http: HttpClient) { }


    getClientes(): Observable <Cliente[]>{
    //  return of(CLIENTES);
  //1.- esta es una forma de hacer el cast de un tipo json que es lo que retorna a tipo clientes que es lo que necesitamos
    return this.http.get<Cliente[]>(this.urlEndPoint);

  //2.-esta es otra forma, para hacer el cast,  de desta forma se debe de hacer el import de {map} el cual deje arriba comentado.
  // return this.http.get(this.urlEndPoint).pipe(
  //   map((response) => response as Cliente[])
 //);



    }
}
