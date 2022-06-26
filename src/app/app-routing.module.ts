import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './pages/header/header.component';
import { BemvindoComponent } from './pages/bemvindo/bemvindo.component';
import { AutistaComponent } from './pages/autista/autista.component';
import { ResponsaveisComponent } from './pages/responsaveis/responsaveis.component';
import { SaudeComponent } from './pages/saude/saude.component';

const routes: Routes = [

  {
    path: '',
    component: BemvindoComponent,
  },
  {
    path: 'autista',
    component: AutistaComponent,
  },
  {
    path: 'responsaveis',
    component: ResponsaveisComponent,
  },
  {
    path: 'saude',
    component: SaudeComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
