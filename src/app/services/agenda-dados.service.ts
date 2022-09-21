import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendaDadosService {

  private Contatos= [
    {id:1 , nome:'Mãe' , numero:"(35) 9-9999-9999" ,  },
    {id:2 , nome:'Pai' , numero: "(35) 8-8888-8888" ,  },

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

