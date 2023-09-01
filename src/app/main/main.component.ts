import { Component } from '@angular/core';
 //Importación de la interfaz
 import { Usuario } from '../interfaces/usuario';

 //Importación del servicio
 import { UsuarioService } from '../providers/usuario.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  public data : Usuario[] = [];
  displayedColumns: string[] = ['UsuarioID', 'Nombre', 'CorreoElectronico'];

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      //Setea la data en la variable
      this.data = (response as Usuario[]); 
    })
  }

  constructor(private dataProvider: UsuarioService) { }

}
