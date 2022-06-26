import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './pages/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BemvindoComponent } from './pages/bemvindo/bemvindo.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { AutistaComponent } from './pages/autista/autista.component';
import { ResponsaveisComponent } from './pages/responsaveis/responsaveis.component';
import { SaudeComponent } from './pages/saude/saude.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BemvindoComponent,
    AutistaComponent,
    ResponsaveisComponent,
    SaudeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
