import { Component } from '@angular/core';


interface Producto {
  nombre: string;
  precio: number;
  disponible: boolean;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombreTienda: string = 'TecnoStore';
  encargado: string = 'Arian Mealla';
  numeroSucursal: number = 3;
  tiendaAbierta: boolean = true;
  categorias: string[] = ['Celulares', 'Accesorios', 'Audífonos'];

  producto: Producto = {
    nombre: 'Samsung Galaxy A55',
    precio: 3200,
    disponible: true
  };
}