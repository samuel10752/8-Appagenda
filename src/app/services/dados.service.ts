import { Injectable } from '@angular/core';

//import
import { contato } from '../models/model';
import { Guid } from 'guid-typescript'
import { Storage } from '@ionic/storage-angular'

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  public contatos = [
   // {id : 1, nome : "Mãe", sobrenome: "", tipo: "celular", telefone : "9-8888-7777", email : ""},
   // {id : 2, nome :"Amor", sobrenome: "", tipo: "celular", telefone : "9-9191-8484", email : ""}
  ]

  constructor(
    private storage : Storage
  ) { }

  inserirContato(dadosRecebidos : contato){
    dadosRecebidos.id = Guid.create()

    this.storage.set(dadosRecebidos.id.toString(),JSON.stringify(dadosRecebidos))
    
  }

  EnviarTodosContatos(){
    return this.contatos
  }

  FiltraContatosId(id : number){
    const contatoSelecionado = this.contatos.filter(contato => contato.id === id)
    console.log(contatoSelecionado)
    return contatoSelecionado[0]
  }

  ExcluirContatoId(contatoRecebido : any){
    this.contatos.splice(this.contatos.indexOf(contatoRecebido), 1)
  }

}