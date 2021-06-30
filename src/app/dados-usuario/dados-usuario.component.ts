import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlertComponent } from 'ngx-bootstrap/alert';

import { ContatosDataBaseService } from './../servicos/contatos-data-base.service';
import { Contato } from '../modelos/contato';

@Component({
  selector: 'app-dados-usuario',
  templateUrl: './dados-usuario.component.html',
  styleUrls: ['./dados-usuario.component.css']
})
export class DadosUsuarioComponent implements OnInit {

  
  @ViewChild('frmCadastro')
  private frmCadastro: NgForm;
  
  ultimoId: number = 96;
  _contato: Contato;
  cadastrouContato =	false;
  tipos: string	[]	=	['Principal',	'Celular', 'Casa', 'Trabalho', 'Fax'];

  constructor(private	dataBaseService:	ContatosDataBaseService)	{}

  ngOnInit() {
    this.novoContato();
  }

  salvar(form: NgForm): void {
    this.ultimoId = this.ultimoId + 50;
    this._contato.id = this.ultimoId;
    this.dataBaseService.addContato(this._contato);
    this.cadastrouContato = true;
    this.novoContato();
    this.novoFormulario(form);
  }

  novoContato(): void {
    this._contato = new Contato(0, '','','','');
  }
 
  onClosed(dismissedAlert: AlertComponent): void {
    this.cadastrouContato = false;
  }

  novoFormulario(form: NgForm): void {
    form.resetForm();
  }

}
