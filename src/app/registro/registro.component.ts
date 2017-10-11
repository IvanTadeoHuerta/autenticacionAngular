import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from "../services/autorizacion.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent implements OnInit {

 
  constructor(private autorozacionService: AutorizacionService) { 
    this.autorozacionService.registro('email','123');
  }

  ngOnInit() {
  }

}
