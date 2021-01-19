import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OrdersModule}  from './orders/orders.module';
import { NewComponent } from './new/new.component';
import { ComComponent } from './com/com.component';
import { OneComponent } from './one/one.component';
import { ThreeComponent } from './three/three.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    ComComponent,
    OneComponent,
    ThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
