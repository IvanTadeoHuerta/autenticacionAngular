import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from "../services/autorizacion.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private autorozacionService: AutorizacionService) { 
    this.autorozacionService.login('email','123');
  }

  ngOnInit() {
  }

}
