import { Contato } from './../modelos/contato';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detalhes-usuario',
  templateUrl: './detalhes-usuario.component.html',
  styleUrls: ['./detalhes-usuario.component.css']
})
export class DetalhesUsuarioComponent implements OnInit {

  @Input() contato: Contato;
  @Output() exibirDetalheContatoEmitter = new EventEmitter();
  exibir = false;

  constructor() { }

  ngOnInit() {
  }

  voltar() {
    this.contato = null;
    this.exibirDetalheContatoEmitter.emit({'exibir': !this.exibir});
  }

}
