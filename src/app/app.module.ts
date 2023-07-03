import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigimonsComponent } from './components/digimons/digimons.component';
import { DigimonBusquedaComponent } from './digimon-busqueda/digimon-busqueda.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const configSocket:SocketIoConfig = {url:"http://localhost:3001", options:{}}
@NgModule({
  declarations: [
    AppComponent,
    DigimonsComponent,
    DigimonBusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(configSocket)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
