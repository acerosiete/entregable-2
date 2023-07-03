import { Component, OnInit } from '@angular/core';
import { DigimonService } from '../../services/digimon.service';
import { SocketService } from 'src/app/services/socket.service';
import { NgForm } from "@angular/forms";
import { Digimon } from "../../models/digimon";

declare var M: any;

@Component({
  selector: 'app-digimons',
  templateUrl: './digimons.component.html',
  styleUrls: ['./digimons.component.css'],
  providers: [DigimonService],
})
export class DigimonsComponent implements OnInit{

  constructor(public digimonService: DigimonService , public socketService:SocketService){ 

  }

  ngOnInit(){
        this.socketService.emit("digimon");
        this.getRandomDigimon();
  }

  addDigimon(form: NgForm){
    this.digimonService.postDigimon(form.value)
    .subscribe(res =>{
      console.log("resultdo de guardar digimon:",res.toString());
      this.resetForm(form);
      M.toast({html: 'Digimon guardado'});
    })
  }

  getRandomDigimon(){

    this.digimonService.getRandomDigimon()
    .subscribe((res:any) =>{
      this.digimonService.digimons = res as Digimon[];
      console.log(res);
      this.digimonService.img = res;
    });
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.digimonService.selectedDigimon = new Digimon();
    }
  }



}
