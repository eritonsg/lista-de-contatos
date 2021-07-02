import { Injectable, EventEmitter } from '@angular/core';

import { Contato } from './../modelos/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatosDataBaseService {

  private MAX_CONTATOS : number = 24;

  contatos: Contato[] = [];
  contatoEmitter = new EventEmitter();

  constructor() {
    this.contatos = this.novaListaDeContatos();
  }

  renovaListaDeContatos(): void {
    this.contatos = this.novaListaDeContatos();
  }

  private novaListaDeContatos(): Contato[] {
    
    let novaLista: Contato[] = [
          {
            'id': 45,
            'nome': 'Bernardo Leonardo Baptista',
            'telefone': '(83) 98368-3656',
            'email': 'bernarlb@racml.com.br',
            'tipo': 'Celular'
          },
          {
            'id': 63,
            'nome': 'Bruna Fátima Lorena da Cruz',
            'telefone': '(83) 99916-4143',
            'email': 'brunafatima@boiago.com.br',
            'tipo': 'Celular'
          },
          {
            'id': 57,
            'nome': 'Valentina Melissa da Paz',
            'telefone': '(83) 99112-1772',
            'email': 'valentinapaz83@mail.com',
            'tipo': 'Trabalho'
          },
          {
            'id': 74,
            'nome': 'André Enrico Almeida',
            'telefone': '(83) 2175-9486',
            'email': 'andreenr@br.inter.net',
            'tipo': 'Principal'
          },
          {
            'id': 96,
            'nome': 'Clarice Vanessa da Silva',
            'telefone': '(83) 98425-8279',
            'email': 'claricev@clcimoveis.com.br',
            'tipo': 'Celular'
          },
          {
            'id': 78,
            'nome': 'Henry Pedro Henrique Alves',
            'telefone': '(83) 2546-1223',
            'email': 'henrypedrohenriquealves-74@poolrescue.com.br',
            'tipo': 'Principal'
          },
          {
            'id': 52,
            'nome': 'Olivia Evelyn Natália Nogueira',
            'telefone': '(83) 99124-0812',
            'email': 'oliviaevelynnatalianogueira_@citi.com',
            'tipo': 'Celular'
          },
          {
            'id': 15,
            'nome': 'Lúcia Fernanda Almeida',
            'telefone': '(83) 3858-5988',
            'email': 'luciafernandaalmeida-96@simoesmendonca.adv.br',
            'tipo': 'Fax'
          },
          {
            'id': 34,
            'nome': 'Sebastiana Alessandra Raimunda Gomes',
            'telefone': '(83) 98942-2892',
            'email': 'ssebastianaalessandraraimundagomes@gmapst.com',
            'tipo': 'Celular'
          },
          {
            'id': 75,
            'nome': 'Carlos Elias Freitas',
            'telefone': '(83) 99896-7234',
            'email': 'carloseliasfreitas-93@gmx.com',
            'tipo': 'Celular'
          },
          {
            'id': 32,
            'nome': 'Bernardo João Diogo Silva',
            'telefone': '(83) 3573-7103',
            'email': 'bbernardojoaodiogosilva@campanati.com.br',
            'tipo': 'Principal'
          },
          {
            'id': 5,
            'nome': 'Regina Lúcia Castro',
            'telefone': '(83) 98262-2785',
            'email': 'reginaluciacastrocastro@somma.net.br',
            'tipo': 'Trabalho'
          },
          {
            'id': 7,
            'nome': 'Manuel Eduardo da Cruz',
            'telefone': '(83) 98777-7971',
            'email': 'mmanueleduardodacruz@tecnew.net',
            'tipo': 'Celular'
          },
          {
            'id': 4,
            'nome': 'Eduardo Lucas da Silva',
            'telefone': '(83) 2666-7848',
            'email': 'eduardolucasdasilva-91@3dmaker.com.br',
            'tipo': 'Trabalho'
          },
          {
            'id': 8,
            'nome': 'Luan Cláudio Nogueira',
            'telefone': '(83) 98174-5497',
            'email': 'lluanclaudionogueira@leonardopereira.com',
            'tipo': 'Celular'
          }
        ];
    
    return novaLista;

  }

  addContato(contato: Contato): void {
    if (this.contatos.length < this.MAX_CONTATOS) {
      this.contatos.push(contato);
      this.contatoEmitter.emit(this.contatos);
    } else {
      alert('Você excedeu a quantidade máxima (' + this.MAX_CONTATOS + ') de cadastrados permitidos.');
    }
  }

  getContato(id: number): Contato {
    let contato: Contato = this.contatos.filter(c => c.id === id)[0];
    return contato;
  }

  getContatos(): Contato[] {
    return this.contatos.sort((c1, c2) => this.compareTo(c1,c2));
  }

  compareTo(c1: Contato, c2: Contato): number {
    
    if (c1.nome > c2.nome) {
      return 1;
    }
    if (c1.nome < c2.nome) {
      return -1;
    }
    
    return 0;
  }
}
