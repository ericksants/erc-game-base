import { Component, EventEmitter, inject, Input, input, Output } from '@angular/core';
import { EnviaFomulario } from '../../services/envia-fomulario';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // Injetando o serviço EnviaFomulario
  private enviaFomulario = inject(EnviaFomulario);
  myBoolean = false;
  deveMostrarTitulo = false;
  name = 'Erick';
  listItens = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  toggleBoolean(valueParam: boolean) {
    this.myBoolean = valueParam;
  }



  @Input("name") minhaPropiedadeDeFora!: string;

  @Output() emitindoValorName = new EventEmitter<string>();



  submit() {
    const formData = 'Dados do formulário';
    this.enviaFomulario.enviaInformacoesBackEnd(formData);
    this.emitindoValorName.emit(this.name);
  }
}
