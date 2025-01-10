import { Component } from '@angular/core';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  public people: any[] = [];
  private db: any;
  public nombre: string = '';
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

    this.getPeople();
    this.addData();
  }

    // Método para obtener datos de Firestore
    async getPeople() {
      try {
        this.people = [];
        const peopleSnapshot = await getDocs(collection(this.db, 'people'));
        this.people = peopleSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log('Datos obtenidos:', this.people);
        
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    }
  
    // Método para agregar datos a Firestore
    async addData() {
      try {
        const result = await addDoc(collection(this.db, 'people'), {
          nombre: this.nombre,
          fecha: new Date(),
        });
        console.log('Datos añadidos con ID:', result.id);
      } catch (error) {
        console.error('Error al añadir datos:', error);
      }
    }
    async delete(personId: string) {
      try {
        await deleteDoc(doc(this.db, 'people', personId));
        console.log(`Documento con ID ${personId} eliminado.`);
        this.getPeople(); // Actualiza la lista después de eliminar
      } catch (error) {
        console.error('Error al eliminar documento:', error);
      }
    }
}
