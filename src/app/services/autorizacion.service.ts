import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class AutorizacionService {
  constructor(private angularFireAuth: AngularFireAuth){

  }

  public login = (email, password) => {
      console.log('Metodo de login')
  }

  public registro = (email, password) => {
    console.log('Metodo de registro')
}

  

}
