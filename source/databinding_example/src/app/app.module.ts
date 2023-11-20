import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CookpitComponent } from './cookpit/cookpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { ServerTypeComponent } from './server-type/server-type.component';

@NgModule({
  declarations: [
    AppComponent,
    CookpitComponent,
    ServerElementComponent,
    ServerTypeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
