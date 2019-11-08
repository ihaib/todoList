import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoList';

  constructor() {
    const  firebaseConfig = {
      apiKey: "AIzaSyA0UAI_trmgaRaiToLueneGXGFsnNcwY5g",
      authDomain: "todolist-bc3ea.firebaseapp.com",
      databaseURL: "https://todolist-bc3ea.firebaseio.com",
      projectId: "todolist-bc3ea",
      storageBucket: "todolist-bc3ea.appspot.com",
      messagingSenderId: "399642025277",
      appId: "1:399642025277:web:b1035d2737098735f2f954"
    }
    firebase.initializeApp(firebaseConfig);
  }

}
