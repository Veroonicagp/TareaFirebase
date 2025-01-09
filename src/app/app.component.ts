import { Component } from '@angular/core';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { initializeApp } from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})



export class AppComponent {
   private db;
  
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyACYKe4h2-pAh4rW2ENDmGLB3EYsvT8WLg",
      authDomain: "nueva-e5fd9.firebaseapp.com",
      projectId: "nueva-e5fd9",
      storageBucket: "nueva-e5fd9.firebasestorage.app",
      messagingSenderId: "721493712641",
      appId: "1:721493712641:web:4c4c65c60a28040f230500",
      measurementId: "G-C3N8HVJK7Q"
    };
    
    const app = initializeApp(firebaseConfig);
    //Inicializa el firebase obtiene datos
    this.db = getFirestore(app);
  }
  async getPeople(){
    try{
      const peopleSnapshot = await getDocs(collection(this.db,'people'));
    peopleSnapshot.forEach((doc)=>{
      console.log(`${doc.id}=>`, doc.data());
    });
    } catch{
      console.log('nada')
    }
    
  }
}



