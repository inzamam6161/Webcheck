import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signUp(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email,password).catch(
      error=>console.log(error)
    );
  }
    login(email: string, password: string){

      firebase.auth().signInWithEmailAndPassword(email,password)
       .then(
         response => console.log('success login')
       )
       .catch(

       );

    }
 
}
