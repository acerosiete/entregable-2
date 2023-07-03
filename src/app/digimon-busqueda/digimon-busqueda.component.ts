import { Component, OnInit } from '@angular/core';
import { DigimonService } from '../services/digimon.service';
import { Digimon } from '../models/digimon';
import { NgForm } from "@angular/forms";


declare var M: any;
@Component({
  selector: 'app-digimon-busqueda',
  templateUrl: './digimon-busqueda.component.html',
  styleUrls: ['./digimon-busqueda.component.css'],
  providers: [DigimonService],
})
export class DigimonBusquedaComponent  implements OnInit{

  constructor(public digimonService: DigimonService){ }
  
  ngOnInit(){
  }

  getAllDigimons(form: NgForm){
    this.digimonService.getAllDigimons()
    .subscribe(res =>{
      this.digimonService.digimons = res as Digimon[];
      this.resetForm(form);
      console.log(res);
    });
  }

  getDigimonByName(_id: string, form: NgForm) {
    console.log("nombre enviado:",_id);
    this.digimonService.getDigimonByName(_id).subscribe(res =>{
      var resultadoDigimonNombre = res as Digimon[];
    if(resultadoDigimonNombre.length != 0){
        this.digimonService.digimons = res as Digimon[];
        this.resetForm(form);
    }else{
      this.resetForm(form);
      M.toast({html: 'No existe digimon en tu busqueda'});
    }  
    });
}
  getDigimonByLevel(_id: string, form: NgForm) {
    console.log("nivel enviado:",_id);
      this.digimonService.getDigimonByLevel(_id).subscribe(res =>{
    var resultadoTodosDigimons = res as Digimon[];
    console.log("todos los digimons por nivel:",resultadoTodosDigimons);

    if(resultadoTodosDigimons.length != 0){
          this.digimonService.digimons = res as Digimon[];
          this.resetForm(form);
    }else{
      this.resetForm(form);
      M.toast({html: 'No existe nivel en tu busqueda'});
    }
    });
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.digimonService.selectedDigimon = new Digimon();
    }
  }
}
