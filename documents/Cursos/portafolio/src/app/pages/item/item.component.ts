import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/service/productos.service';
import { productosDescripcion } from 'src/app/interfaces/producto-descripcion.interface';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  
})
export class ItemComponent implements OnInit {

  producto : productosDescripcion;

  id:string;

  CurrentDate = new Date();  
  
  constructor(private route: ActivatedRoute,
              public productService: ProductosService) { }

  ngOnInit() {

    this.route.params
    .subscribe(parametros =>{
      // console.log(parametros['id']);
      
      this.productService.getProducto(parametros['id'])
      .subscribe((producto: productosDescripcion) => {
        this.id = parametros['id'];
        this.producto = producto;
        //console.log(producto);
        //console.log(parametros);

      });


    });
  }

}
