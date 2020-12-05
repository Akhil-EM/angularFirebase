import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';

// firebase 
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


//importing forms

import {FormsModule} from '@angular/forms'

// firebase config
const config={
  apiKey: "AIzaSyDVDl5_K_xlXkKp3rZ6aqEZKukLwQo4k9w",
  authDomain: "news-application-555a9.firebaseapp.com",
  projectId: "news-application-555a9",
  storageBucket: "news-application-555a9.appspot.com",
  messagingSenderId: "1020578665526",
  appId: "1:1020578665526:web:6df98038eec0ebf3e83497",
  measurementId: "G-2XMTYELZEK"

}


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,// storage
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
