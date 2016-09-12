import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { AppComponent }   from './app.component';
import { UserService } from './user.service';
import { ModalWindow } from './modal-window.component';
import { routing } from './app.routing';

@NgModule({
  imports:      [
                  BrowserModule,
                  HttpModule,
                  Ng2Bs3ModalModule,
                  routing
                ],
  declarations: [ 
                  AppComponent,
                  ModalWindow
                ],
  bootstrap:    [ AppComponent ],
  providers:    [ UserService ]
})
export class AppModule { }
