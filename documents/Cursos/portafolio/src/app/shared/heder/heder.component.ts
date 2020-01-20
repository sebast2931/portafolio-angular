import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/service/info-pagina.service';
import { Infopagina } from 'src/app/interfaces/info-pagina.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.css']
})
export class HederComponent implements OnInit {

  constructor(public _servicio: InfoPaginaService,
              private router: Router) { }

  ngOnInit() {
  }

  buscarProducto(termino: string){

    if(termino.length < 1){
      return;
    }
    
    this.router.navigate(['/search', termino]);
    // console.log(termino);
  }

}
