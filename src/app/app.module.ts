import { NgModule, provideAppInitializer } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';




const firebaseConfig = {
  apiKey: "AIzaSyACYKe4h2-pAh4rW2ENDmGLB3EYsvT8WLg",
  authDomain: "nueva-e5fd9.firebaseapp.com",
  projectId: "nueva-e5fd9",
  storageBucket: "nueva-e5fd9.firebasestorage.app",
  messagingSenderId: "721493712641",
  appId: "1:721493712641:web:4c4c65c60a28040f230500",
  measurementId: "G-C3N8HVJK7Q"
};


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
            IonicModule.forRoot(),  
            AppRoutingModule,
            //provideFirebaseApp(() => initializeApp(firebaseConfig)),
      ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: 'FirebaseConfig', useValue: firebaseConfig }, 
  ],
  bootstrap: [AppComponent],

})
export class AppModule {

}

