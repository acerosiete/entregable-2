import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Digimon } from '../models/digimon';
import { SocketService } from '../services/socket.service';
 
@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  selectedDigimon: Digimon;
  digimons: Digimon[] = [];
  img:string = "";
  readonly URL_API = 'http://localhost:3001/digimon';

  constructor(public http: HttpClient, private socketService: SocketService) { 
    this.selectedDigimon = new Digimon();
  }

  getAllDigimons() {
    return this.http.get(this.URL_API);
  }

  getDigimonByName(_id: string){
    return this.http.get(this.URL_API + `/name/${_id}`);
  }

  postDigimon(digimon: Digimon) {
    return this.http.post(this.URL_API, digimon);
  }

  getDigimonByLevel(_id: string){
    return this.http.get(this.URL_API + `/busqueda/${_id}`);
  }

  getRandomDigimon(){
    return  this.socketService.on("digimonRandom");
  }

  
}
