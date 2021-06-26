import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { AlertModule } from 'ngx-bootstrap/alert';
import { checkCircleFill } from 'ngx-bootstrap-icons';

import { AppComponent } from './app.component';
import { DadosUsuarioComponent } from './dados-usuario/dados-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { DetalhesUsuarioComponent } from './detalhes-usuario/detalhes-usuario.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';

const icons = {
  checkCircleFill
};

@NgModule({
  declarations: [
    AppComponent,
    DadosUsuarioComponent,
    ListaUsuariosComponent,
    DetalhesUsuarioComponent,
    CabecalhoComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    NgxBootstrapIconsModule.pick(icons)
  ],
  providers: [],
  exports: [
    AlertModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
