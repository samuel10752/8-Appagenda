import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AgendaDadosService } from 'src/app/services/agenda-dados.service';

@Component({
  selector: 'app-agenda-detalhes',
  templateUrl: './agenda-detalhes.page.html',
  styleUrls: ['./agenda-detalhes.page.scss'],
})
export class AgendaDetalhesPage implements OnInit {

  public contatoselecionado : any
  public modoDeEdicao = false
  handlerMessage = '';
  roleMessage = '';
  
  constructor(
    private route : ActivatedRoute,
    private agenda : AgendaDadosService,
    private alertController: AlertController

  ) { }

  iniciarEdicao() {
    this.modoDeEdicao = true
  }


  encerrarEdicao() {
    const id: number = Number (this.route.snapshot.paramMap.get('id'))
    if (id > 0 ){

      this.modoDeEdicao = false
    } else {
      this.agenda.recebeDados(this.contatoselecionado)
      this.modoDeEdicao = false
    }
  }


  ngOnInit() {

    const id: number = Number (this.route.snapshot.paramMap.get('id'))
    if (id > 0 ){
       this.contatoselecionado = this.agenda.enviardadosid(id)
    } else{

    this.contatoselecionado= {id , nome: "", numero: 0.0}
    this.modoDeEdicao= true
    }
    
  }


  deletarServico(){
    this.agenda.deletaDados(this.contatoselecionado)
  }
    async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }
}
