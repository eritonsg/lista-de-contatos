import { ContatosDataBaseService } from './../servicos/contatos-data-base.service';
import { Component, OnInit } from '@angular/core';
import { Contato } from '../modelos/contato';

@Component({
  selector: 'app-dados-usuario',
  templateUrl: './dados-usuario.component.html',
  styleUrls: ['./dados-usuario.component.css']
})
export class DadosUsuarioComponent implements OnInit {

  cadastrouContato =	false;
  _nome: string;
  _telefone: string;
  _email: string;
  _tipo: string;
  tipos: string	[]	=	['Particular',	'Trabalho',	'Amigos',	'Família'];

  constructor(private	dataBaseService:	ContatosDataBaseService)	{}

  ngOnInit() {
  }

  enviarDados(): void {
    if (this._tipo = undefined) {
      this._tipo = this.tipos[0];
    }
    this._tipo = this.tipos[0];
    const contato = new Contato(this._nome, this._telefone, this._email, this._tipo);
    this.dataBaseService.addContato(contato);
    this.cadastrouContato = !this.cadastrouContato;
  }

  voltar()	{
    this._nome	=	'';
    this._telefone	=	'';
    this._email	=	'';
    this._tipo	=	'';
    this.cadastrouContato	=	!this.cadastrouContato;
  }

}
