import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ContadorModule } from './counter/components/Contador.module';
import { HeroesModule } from './heroes/HeroesModule';

import { AppComponent } from './app.component';
//import { HeroeComponent } from './heroes/heroe/heroe.component';
//import { ListComponent } from './heroes/list/list.component';
//import { ContadorComponent } from './counter/components/counter/contador.component';


@NgModule({
  declarations: [
    AppComponent,
//    ContadorComponent,
//    HeroeComponent,
//    ListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContadorModule,
    HeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
