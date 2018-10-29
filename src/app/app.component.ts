import { ContatosDataBaseService } from './servicos/contatos-data-base.service';
import { Contato } from './modelos/contato';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ListaDeContatos';
  contatoSelecionado: Contato;
  exibirLista = true;

  constructor(private contatoService: ContatosDataBaseService) { }

  ngOnInit() {
  }

  alterarContatoSelecionado(id) {
    this.exibirLista = !this.exibirLista;
    this.contatoSelecionado = this.contatoService.getContato(id);
  }

  exibirListaContatos(objeto) {
    this.exibirLista = objeto.exibir;
  }

}
