import { Injectable, EventEmitter } from '@angular/core';

import { Contato } from './../modelos/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatosDataBaseService {

  meusContatos: Contato[] = [
    {'nome': 'Bernardo Leonardo Baptista',
    'telefone': '83983683656',
    'email': 'bernarlb@racml.com.br',
    'tipo': 'Trabalho'
    },
    {'nome': 'Bruna Fátima Lorena da Cruz',
    'telefone': '83999164143',
    'email': 'brunafatima@boiago.com.br',
    'tipo': 'Trabalho'
    },
    {'nome': 'Valentina Melissa da Paz',
    'telefone': '83991121772',
    'email': 'valentinapaz@htmail.com',
    'tipo': 'Particular'
    },
    {'nome': 'André Enrico Almeida',
    'telefone': '83991321553',
    'email': 'andreenr@br.inter.net',
    'tipo': 'Amigos'
    },
    {'nome': 'Clarice Vanessa da Silva',
    'telefone': '83984258279',
    'email': 'claricev@clcimoveis.com.br',
    'tipo': 'Família'
    }
  ];
  contatoEmitter = new EventEmitter();

  constructor() {
    const c1 = new Contato('Bernardo Leonardo Baptista', '83983683656', '', 'Particular');
    const c2 = new Contato('Bernardo Leonardo Baptista', '83983683656', '', 'Particular');
  }

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
