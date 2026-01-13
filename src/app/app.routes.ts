import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    //Define a rota e mapeamento do componente HomeComponent para o caminho 'home'.
    path: 'home',
    component: HomeComponent,
  }
];


