import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { MapaComponent } from './components/mapa/mapa.component';

import { AgmCoreModule } from '@agm/core';
import { EditarMarcadorComponent } from './components/mapa/editar-marcador.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from './pipes/pipes.module';


@NgModule({
  entryComponents: [EditarMarcadorComponent],
  declarations: [
    AppComponent,
    MapaComponent,
    EditarMarcadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    PipesModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA4Zb-amQbqNaejwTHD0hKCB7ygKpKp-IE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
