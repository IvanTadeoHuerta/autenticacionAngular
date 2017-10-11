import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from "../services/autorizacion.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent implements OnInit {
  registro:any = {};
 
  constructor(private autorozacionService: AutorizacionService) { 
  
  }

  registrar(){
    
    this.autorozacionService.registro(this.registro.email,this.registro.password);
  }

  ngOnInit() {
  }

}
