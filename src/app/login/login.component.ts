import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from "../services/autorizacion.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  registro:any = {}
  constructor(private autorozacionService: AutorizacionService) { 
   
  }

  login(){
    this.autorozacionService.login(this.registro.email,this.registro.password);
  }

  ngOnInit() {
  }

}
