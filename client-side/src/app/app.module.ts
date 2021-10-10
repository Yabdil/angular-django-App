import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CentralComponent } from './components/central/central.component';
import { HeaderComponent } from './components/central/header/header.component';
import { BodyComponent } from './components/central/body/body.component';
import { CreateElementComponent } from './components/central/body/create-element/create-element.component';
import { ListElementComponent } from './components/central/body/list-element/list-element.component';
import { ElementComponent } from './components/central/body/list-element/element/element.component'

import { ItemService } from './services/item/item.service';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LogoutComponent } from './components/central/body/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    CentralComponent,
    HeaderComponent,
    BodyComponent,
    CreateElementComponent,
    ListElementComponent,
    ElementComponent,
    LoginComponent,
    PageNotFoundComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
