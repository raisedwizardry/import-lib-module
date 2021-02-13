import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IntroductionModule, PlesantModule } from 'introduction2';
import { SayingHelloModule } from 'saying-hello';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    IntroductionModule,
    PlesantModule,
    SayingHelloModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
