import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private URL: string = 'https://rest-dataset-production.up.railway.app/rest/usuario/findAll/json';

  constructor(private http: HttpClient) {

  }

  getResponse() {
    return this.http.get(this.URL);
  }
}
