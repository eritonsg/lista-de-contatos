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

  page = 1;
  size = 8;
  count = 0;
  currentIndex = -1;
  tableSize = 8;

  constructor(private databaseService: ContatosDataBaseService) { }

  ngOnInit() {
    this.contatos = this.databaseService.getContatos();
  }

  contatoClidado(item:	number)	{
    this.listaContatoEmitter.emit(item);
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.currentIndex = -1;
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.currentIndex = -1;
  }

}
