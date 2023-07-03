import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(public socketDigi:Socket) {
    
    this.iniciarConexion();
   }

   iniciarConexion(){
    this.socketDigi.on("connect", function(){
        console.log("concectado al servidor");
    })

    this.socketDigi.on("disconnect", function(){
      console.log("desconectado al servidor");
  })
    
   }

  emit(evento: string, payload?: any, callback?: Function) {
    this.socketDigi.emit(evento, payload)
  }
  on(evento: string, payload?: any, callback?: Function) {
    return this.socketDigi.fromEvent(evento);
  }
}
