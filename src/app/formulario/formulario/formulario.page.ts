import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  clienteForm : FormGroup

  constructor(private formBuilder : FormBuilder) { } 

  enviar(){
    if (this.clienteForm.invalid || this.clienteForm.pending){
      return
    }
  }

  ngOnInit() {
    this.clienteForm = this.formBuilder.group({
      nome : ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
      sobrenome : ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
      email : ['', Validators.compose([Validators.required, Validators.email])],
      numero : ['', [Validators.required, Validators.minLength(15)]],
      tipo : []
    })
  }
}
