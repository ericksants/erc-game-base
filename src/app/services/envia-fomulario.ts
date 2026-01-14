import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnviaFomulario {
  constructor() {}
  // Compartilhar lógica para enviar formulários
  enviaInformacoesBackEnd(formData: String) {
    // Lógica para enviar o formulário, por exemplo, via HTTP
    console.log('Enviando formulário com os dados:', formData);
  }
}
