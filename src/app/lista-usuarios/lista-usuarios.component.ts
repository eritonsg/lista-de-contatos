import { ContatosDataBaseService } from './../servicos/contatos-data-base.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Contato } from './../modelos/contato';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  contatos: Contato[] = [];
  @Output() listaContatoEmitter = new EventEmitter();
  @Input() exibirLista = true;

  constructor(private databaseService: ContatosDataBaseService) { }

  ngOnInit() {
    this.contatos = this.databaseService.getContatos();
  }

  contatoClidado(item:	number)	{
    this.listaContatoEmitter.emit(item);
  }

}
