import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  public nombre: string = 'Orquidea';
  public edad: number = 42;



  get nombreCapitalizado (): string {
    return this.nombre.toUpperCase();
  }

  get HeroDescription(): string {
    return `${ this.nombre } - ${ this.edad }`;
  }

  changeNombre (): void  {
    this.nombre = 'Cempasuchitl';
  }
  changeEdad (): void {
    this.edad = 45;
  }

  resetForm ():void {
    this.nombre='Orquidea';
    this.edad=42;
  }

}
