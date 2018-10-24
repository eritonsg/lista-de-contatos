import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DadosUsuarioComponent } from './dados-usuario/dados-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { DetalhesUsuarioComponent } from './detalhes-usuario/detalhes-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    DadosUsuarioComponent,
    ListaUsuariosComponent,
    DetalhesUsuarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
