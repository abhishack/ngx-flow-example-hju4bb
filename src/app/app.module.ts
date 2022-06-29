import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxFlowModule } from '@flowjs/ngx-flow';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, NgxFlowModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
