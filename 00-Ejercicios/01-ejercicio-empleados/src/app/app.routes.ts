import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Proyectos } from './proyectos/proyectos';
import { QuienesSomos } from './quienes-somos/quienes-somos';
import { Contactos } from './contactos/contactos';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'proyectos', component: Proyectos },
  { path: 'quienes-somos', component: QuienesSomos },
  { path: 'contactos', component: Contactos },
];
