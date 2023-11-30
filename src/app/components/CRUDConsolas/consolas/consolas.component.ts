import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consolas } from 'app/interfaces/consola';
import { ConsolasService } from 'app/services/consolas.service';

@Component({
  selector: 'app-consolas',
  templateUrl: './consolas.component.html',
  styleUrls: ['./consolas.component.css']
})
export class ConsolasComponent implements OnInit {

  consola: Consolas =
  {
     nombre:"",
     fabricante:"",
     lanzamiento:"",
     almacenamiento:"",
     precio:0,
     enlaceImagen:""
  }

  constructor(private consolaService: ConsolasService, private ruta: Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  guardarConsola(){
     this.consolaService.guardarConsola(this.consola).subscribe(data => {
        if (data) {
           alert("Creado exitosamente")
           this.ruta.navigate(['/table-list'])
        }
        else {
           alert("No creado")
        }
     });
  }

}
