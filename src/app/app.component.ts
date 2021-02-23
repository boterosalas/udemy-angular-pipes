import { Component } from '@angular/core';
import { ResolveEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Ironman';
  nombre2:string = 'dAVid BOtERo sAlAzAr'
  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje: number = 0.234123;
  salario: number = 1234.5;
  videoUrl:string = 'https://www.youtube.com/embed/d7LQ-I1c18s'
  contrasenaFlat: boolean = true;

  idioma: string = 'es';

  fecha: Date = new Date();

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }

  valorPromesa = new Promise<string>((resolve)=>{
    setTimeout(() => {
      console.log('Promesa');
      resolve('Llegó la data')
    }, 4500);
    
  })
}
