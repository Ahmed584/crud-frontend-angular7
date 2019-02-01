import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserService} from './shared_service/user.service'
import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import{FormsModule} from '@angular/forms';
import {UserformComponent } from './components/userform/userform.component';
import {ListuserComponent} from './components/listuser/listuser.component';

import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';




  @NgModule({
    declarations: [
      AppComponent,
      ListuserComponent,
      UserformComponent,
      
    ],
    imports: [
     FormsModule,
     HttpClientModule,
      BrowserModule,
      AppRoutingModule,],
    
    providers: [UserService], // services
    bootstrap: [AppComponent]
  })
export class AppModule { }
