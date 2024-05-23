import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})

export class AppComponent {
  public  title: string  = 'Orquidea Pruebas';
  public contador: number = 10;

  incrementar ( value: number ):void{
    this.contador += value;
  }

  reset (): void{
    this.contador=10;
  }

}
