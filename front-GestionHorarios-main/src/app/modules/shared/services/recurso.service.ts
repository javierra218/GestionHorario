import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url= environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class RecursoService {

  constructor(private http: HttpClient) { }

  /**
   * 
   *  metodo que obtiene todos los recursos 
   */

  getRecursos(){

    const enpoint =`${base_url}/recurso`;
    return this.http.get(enpoint);

  }

  /**
   * metodo que guarda recursos
   */

  saveRecursos(body:any){
    const endpoint = `${base_url}/recursos`;
    return this.http.post(endpoint,body);
  }

  /**
   * Metodo que edita un recurso
   */
  updateRecursos(body:any, id:any){

    const endpoint = `${base_url}/recursos/ ${id}`;
    return this.http.put(endpoint, body);

  }
  /**
   * Metodo que Elimina un recurso
   */
   deleteRecursos(id:any){

    const endpoint = `${base_url}/recursos/ ${id}`;
    return this.http.delete(endpoint);

  }

  /**
   *Buscar por id 
   */
      getRecursosById(id:any){

    const endpoint = `${base_url}/recursos/ ${id}`;
    return this.http.get(endpoint);

  }
}