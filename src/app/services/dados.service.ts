import { Injectable } from '@angular/core';

//import
import { contato } from '../models/model';
import { Guid } from 'guid-typescript'
import { Storage } from '@ionic/storage-angular'
import { async } from '@angular/core/testing';

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
    //return this.contatos

    let arrayContatos : contato [] = []

    this.storage.forEach((valor : string) => {const contato : contato = JSON.parse(valor); arrayContatos.push(contato)})
    return arrayContatos
  }

  async FiltraContatosId(id : string){
  //  const contatoSelecionado = this.contatos.filter(contato => contato.id === id)
  //  console.log(contatoSelecionado)
  //  return contatoSelecionado[0]

   return JSON.parse(await this.storage.get(id))
  }

  ExcluirContatoId(id : string){
   this.storage.remove(id)

  }

  AlterarContatoid(id: string, dadosRecebidos: contato){
    dadosRecebidos.id = Guid.parse(id)
    this.storage.set(dadosRecebidos.id.toString(), JSON.stringify(dadosRecebidos))
  }

}