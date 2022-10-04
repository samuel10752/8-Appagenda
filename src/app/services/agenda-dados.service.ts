import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AgendaDadosService {


  private Contatos= [
    {id:1 , nome:'Ana' , sobrenome:'Clara' , tipo:'Casa',  numero:"(35) 9999-9999" , email:'seuemail@gmail.com' },
    {id:2 , nome:'Isadora' , sobrenome:'Reis', tipo:'Celular' , numero: "(35) 8888-8888" , email:'seuemail@gmail.com' },
    {id:3 , nome:'Julia' , sobrenome:'Reis' , tipo:'Trabalho',  numero:"(35) 7777-7777" , email:'seuemail@gmail.com' },
  ]

  constructor() {}


  enviartodosdados() {
    return this.Contatos
  }


  enviardadosid(id: number) {
    const contatoselecionado = this.Contatos.filter(produto => produto.id === id)
    return  contatoselecionado[0]
  }


  recebeDados(dadosRecebidos : any){
    dadosRecebidos.id = this.Contatos.length + 1
    this.Contatos.push(dadosRecebidos)
  }


  
  deletaDados(dadosRecebidos : any){ 
    this.Contatos.splice(this.Contatos.indexOf(dadosRecebidos), 1)
  }

}

