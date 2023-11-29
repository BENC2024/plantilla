import { Component, OnInit } from '@angular/core';
import { ConsolasService } from 'app/services/consolas.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  public listaConsolas: any[] = [] //REcibe los datos del tipo objeto

  constructor( private consolaServicio: ConsolasService ) { }

  async ngOnInit(){ //Inicio asincrono
    this.consolaServicio.getServices().subscribe(
       lista => {
          this.listaConsolas = lista
       }
    )
 }

}
