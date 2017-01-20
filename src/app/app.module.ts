import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

// ROUTING
import { AppRoutingModule } from './app-routing.module';

// COMPONENTS
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './home/home.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBOn695rg-RUOTCl6m-1MkkJCzbQVSn950",
  authDomain: "klatch-20c21.firebaseapp.com",
  databaseURL: "https://klatch-20c21.firebaseio.com",
  storageBucket: "klatch-20c21.appspot.com",
  messagingSenderId: "493332618468"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
