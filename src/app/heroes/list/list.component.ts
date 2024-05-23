import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    public nombreProductos: string [] = ['Orquidea', 'Cempasuchitl', 'Lilis', 'Margaritas'];
    public productoBorrado?: string ='';

    borrarProducto(): void {
      this.productoBorrado = this.nombreProductos.pop();
    }



}
