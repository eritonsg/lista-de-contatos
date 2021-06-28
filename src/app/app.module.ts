import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxBootstrapModule } from './modulos/ngx-bootstrap/ngx-bootstrap.module';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { DadosUsuarioComponent } from './dados-usuario/dados-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { DetalhesUsuarioComponent } from './detalhes-usuario/detalhes-usuario.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { IconsModule } from './modulos/icones/icons.module';

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
    NgxBootstrapModule,
    NgxPaginationModule,
    IconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
