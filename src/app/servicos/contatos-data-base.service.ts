import { Injectable, EventEmitter } from '@angular/core';

import { Contato } from './../modelos/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatosDataBaseService {

  meusContatos: Contato[] = [];
  contatoEmitter = new EventEmitter();

  constructor() { }

  addContato(contato: Contato): void {
    this.meusContatos.push(contato);
    this.contatoEmitter.emit(this.meusContatos);
  }

  getContato(id): Contato {
    let contato: Contato;
    if (this.meusContatos[id]) {
      contato = this.meusContatos[id];
    }
    return contato;
  }

  getContatos(): Contato[] {
    return this.meusContatos;
  }
}
