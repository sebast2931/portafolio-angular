import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Infopagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: Infopagina = {};
  cargada = false;
    
  equipo: any[] = [];
  

  constructor(private http: HttpClient) {
  
    this.cargarInfo(); 
    this.cargaEquipo(); 
  }

  private cargarInfo(){
    
   // console.log("Servicio Listo");
  
    this.http.get('assets/data/data-pages.json')
    .subscribe((resp: Infopagina) =>{
  
      this.cargada = true;
      this.info = resp;
    // console.log(resp);
    });

  }

  private cargaEquipo(){
    // console.log("Servicio Equipo Listo");
  
    this.http.get('https://angularhtml-1b7a0.firebaseio.com/equipo.json')
    .subscribe((equ: any[]) =>{

      this.equipo = equ;
  
      // console.log(equ);
    });
  } 

}
