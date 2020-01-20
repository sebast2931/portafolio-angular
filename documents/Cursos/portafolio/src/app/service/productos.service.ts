import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { promise } from 'protractor';
// import { setTimeout } from 'timers';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;

  productos: Producto[]= [];

  productosFiltrado: Producto[] = [];

  constructor(private http: HttpClient) {

    this.cargarProducto();
   }

  private cargarProducto(){

    return new Promise((resolve, reject)=>{

      this.http.get('https://angularhtml-1b7a0.firebaseio.com/productos_idx.json')
      .subscribe((res: Producto[]) =>{
        //console.log(res);
        this.productos = res;
        this.cargando = false;   
        // setTimeout(() => {
        //   this.cargando = false;
        // }, 2000);
        resolve();
  
  
      });

    });

  }

  getProducto(id:string){
    return this.http.get(`https://angularhtml-1b7a0.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string){
        
    if( this.productos.length === 0){
      //Cargar Productos(esperar)
      this.cargarProducto().then(()=>{
        //se ejecuta despues de tener los productos
        this.filtrarProductos(termino);

      });
    }else{
      //aplicar el filtro
      this.filtrarProductos(termino);

    }

    // para filtrar
    // this.productosFiltrado = this.productos.filter(producto =>{
    //   return true;
    // });

    // console.log(this.productosFiltrado);
  }

  private filtrarProductos(termino: string){

    // console.log(this.productos);
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();
    
    this.productos.forEach( prod => {
      
      const tituloLower= prod.titulo.toLocaleLowerCase();

      if ( prod.categoria.indexOf ( termino ) >= 0 || tituloLower.indexOf( termino) >= 0){
        this.productosFiltrado.push(prod);
      }
    });
  }

  
}
