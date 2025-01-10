import { Component } from '@angular/core';
import { collection, getDocs, getFirestore, addDoc } from "firebase/firestore";
import { getApp, getApps, initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone:false
})
export class AppComponent {
  private db: any;

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyACYKe4h2-pAh4rW2ENDmGLB3EYsvT8WLg",
      authDomain: "nueva-e5fd9.firebaseapp.com",
      projectId: "nueva-e5fd9",
      storageBucket: "nueva-e5fd9.appspot.com",
      messagingSenderId: "721493712641",
      appId: "1:721493712641:web:4c4c65c60a28040f230500",
      measurementId: "G-C3N8HVJK7Q",
    };

    // Inicializa Firebase
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    this.db = getFirestore(app);


  }


}


