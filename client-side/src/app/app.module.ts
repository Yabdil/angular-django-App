import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CentralComponent } from './central/central.component';
import { HeaderComponent } from './central/header/header.component';
import { BodyComponent } from './central/body/body.component';
import { FooterComponent } from './central/footer/footer.component';
import { CreateElementComponent } from './central/body/create-element/create-element.component';
import { ListElementComponent } from './central/body/list-element/list-element.component';
import { ElementComponent } from '../app/central/body/list-element/element/element.component'

import { ItemService } from './services/item/item.service';
import { Item } from './models/item.model';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LogoutComponent } from './central/body/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    CentralComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
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
