//import { ContadorComponent } from './contador.component';
/*import { Component } from "@angular/core";



@Component({
  selector: 'app-contador',
  template: '<h1>Hola Contador</h1>',
})
export class ContadorComponent {
}
*/
import { AppComponent } from '../../../app.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>Hola Contador</h1>
    <h3>{{contador}}</h3>

    <button (click)="incrementar( 1 )"> + 1 </button>
    <button (click)="reset()">Reset</button>
    <button (click)="incrementar( -1 )"> - 1 </button>
  `
})

export class ContadorComponent {
  public contador: number = 10;

  incrementar ( value: number ):void{
    this.contador += value;
  }

  reset (): void{
    this.contador=10;
  }
}
