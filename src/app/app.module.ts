import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RouterModule, Routes } from '@angular/router';
import { AutorizacionService } from "./services/autorizacion.service";
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MyGuardiaService } from "./services/my-guardia.service";
import { FormularioComponent } from "./formulario/formulario.component";

export const firebaseConfig = {
  apiKey: "AIzaSyCDjpZcx-TYR56Qy_VSf1efdRghdra5KQM",
  authDomain: "platzisquare-9a618.firebaseapp.com",
  databaseURL: "https://platzisquare-9a618.firebaseio.com",
  storageBucket: "platzisquare-9a618.appspot.com",
  messagingSenderId: "554311793407"
};

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent},
  { path: 'formulario', component: FormularioComponent, canActivate: [MyGuardiaService] }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormularioComponent,
    RegistroComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule
  ],
  providers: [AutorizacionService, MyGuardiaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
