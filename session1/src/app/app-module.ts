import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './Components/navbar/navbar';
import { Home } from './Components/home/home';
import { Footer } from './Components/footer/footer';

@NgModule({
  declarations: [App, Navbar, Home, Footer],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
